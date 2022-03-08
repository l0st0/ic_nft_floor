import { NFTCollection } from '@psychedelic/dab-js';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { collectionService } from '../services';
// import { collections } from '../../data/dummy';

const principalID = localStorage.getItem('principal') || '';
const principalList = (JSON.parse(localStorage.getItem('principalList') as string) as string[]) || [];

interface CollectionState {
  collections: NFTCollection[];
  numberOfTokens: number;
  principalID: string;
  principalList: string[];
  loading: boolean;
  validating: boolean;
  error?: string;
}

const initialState: CollectionState = {
  collections: [],
  numberOfTokens: 0,
  principalID,
  principalList,
  loading: false,
  validating: false,
  error: undefined,
};

export const getCollections = createAsyncThunk<
  { collections: NFTCollection[]; principalID: string },
  { principalID: string; validate?: boolean },
  {
    rejectValue: { msg: string; principalID: string };
    state: RootState;
  }
>('collection/getCollections', async ({ principalID, validate = false }, { rejectWithValue, dispatch }) => {
  try {
    dispatch(toggleLoading(validate));

    const collections = await collectionService.getCollections({ principalID });
    if (!collections.length) return rejectWithValue({ msg: 'No collections found for this principal.', principalID });
    return { collections, principalID };
  } catch (err) {
    return rejectWithValue({ msg: 'There was an error while getting collections.', principalID });
  }
});

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.validating = true;
      } else {
        state.loading = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCollections.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getCollections.fulfilled, (state, action) => {
        const cols = action.payload.collections;

        state.loading = false;
        state.validating = false;
        state.error = undefined;
        state.collections = cols;
        state.numberOfTokens = cols.reduce((a, b) => a + b.tokens.length, 0);

        localStorage.setItem('principal', action.payload.principalID);
        state.principalID = action.payload.principalID;
      })
      .addCase(getCollections.rejected, (state, action) => {
        state.loading = false;
        state.validating = false;
        state.collections = [];
        state.error = action.payload?.msg;
        state.numberOfTokens = 0;

        localStorage.setItem('principal', action.payload?.principalID || '');
        state.principalID = action.payload?.principalID || '';
      });
  },
});

export const { toggleLoading } = collectionSlice.actions;
export const collectionState = (state: RootState) => state.collection;

export default collectionSlice.reducer;
