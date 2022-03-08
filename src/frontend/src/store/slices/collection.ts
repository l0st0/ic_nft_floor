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
  { principalID: string },
  {
    rejectValue: { msg: string; principalID: string };
    state: RootState;
  }
>('collection/getCollections', async ({ principalID }, { rejectWithValue }) => {
  try {
    const collections = await collectionService.getCollections({ principalID });
    if (!collections.length) return rejectWithValue({ msg: 'No collections found for this principal.', principalID });
    return { collections, principalID };
  } catch (err) {
    return rejectWithValue({ msg: 'There was an error while getting collections.', principalID });
  }
});

export const revalidateCollections = createAsyncThunk<
  NFTCollection[],
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/revalidateCollections', async (_, { rejectWithValue, getState }) => {
  try {
    const { principalID } = getState().collection;
    const collections = await collectionService.revalidateCollections({ principalID });
    if (!collections.length) return rejectWithValue('No collections found for this principal.');
    return collections;
  } catch (err) {
    return rejectWithValue('There was an error while getting collections.');
  }
});

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollections.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getCollections.fulfilled, (state, action) => {
        const cols = action.payload.collections;

        state.loading = false;
        state.error = undefined;
        state.collections = cols;
        state.numberOfTokens = cols.reduce((a, b) => a + b.tokens.length, 0);

        localStorage.setItem('principal', action.payload.principalID);
        state.principalID = action.payload.principalID;
      })
      .addCase(getCollections.rejected, (state, action) => {
        state.loading = false;
        state.collections = [];
        state.error = action.payload?.msg;
        state.numberOfTokens = 0;

        localStorage.setItem('principal', action.payload?.principalID || '');
        state.principalID = action.payload?.principalID || '';
      })
      .addCase(revalidateCollections.pending, (state) => {
        state.validating = true;
        state.error = undefined;
      })
      .addCase(revalidateCollections.fulfilled, (state, action) => {
        const cols = action.payload;

        state.validating = false;
        state.error = undefined;
        state.collections = cols;
        state.numberOfTokens = cols.reduce((a, b) => a + b.tokens.length, 0);
      })
      .addCase(revalidateCollections.rejected, (state, action) => {
        state.validating = false;
        state.collections = [];
        state.error = action.payload;
        state.numberOfTokens = 0;
      });
  },
});

export const {} = collectionSlice.actions;
export const collectionState = (state: RootState) => state.collection;

export default collectionSlice.reducer;
