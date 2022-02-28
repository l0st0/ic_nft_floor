import { NFTCollection } from '@psychedelic/dab-js';
import { createSlice, PayloadAction, createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModNFTCollectionType } from '../../types';
import collectionService from './collectionService';
// import { collections } from '../../data/dummy';

interface CollectionState {
  collections: NFTCollection[];
  numberOfTokens: number;
  principalID: string;
  loading: boolean;
  validating: boolean;
  error?: string;
}

const initialState: CollectionState = {
  collections: [],
  numberOfTokens: 0,
  principalID: '',
  loading: false,
  validating: false,
  error: undefined,
};

export const getCollections = createAsyncThunk<
  { collections: NFTCollection[]; principal: string },
  { principal: string },
  {
    rejectValue: { msg: string; principal: string };
  }
>('collection/getCollections', async ({ principal }, { rejectWithValue }) => {
  try {
    const collections = await collectionService.getCollections({ principal });
    if (!collections.length) return rejectWithValue({ msg: 'No collections found for this principal.', principal });
    return { collections, principal };
  } catch (err) {
    return rejectWithValue({ msg: 'There was an error while getting collections.', principal });
  }
});

export const revalidateCollections = createAsyncThunk<
  { collections: NFTCollection[]; principal: string },
  { principal: string },
  {
    rejectValue: { msg: string; principal: string };
  }
>('collection/revalidateCollections', async ({ principal }, { rejectWithValue }) => {
  try {
    const collections = await collectionService.revalidateCollections({ principal });
    if (!collections.length) return rejectWithValue({ msg: 'No collections found for this principal.', principal });
    return { collections, principal };
  } catch (err) {
    return rejectWithValue({ msg: 'There was an error while getting collections.', principal });
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
        state.principalID = action.payload.principal;
      })
      .addCase(getCollections.rejected, (state, action) => {
        state.loading = false;
        state.collections = [];
        state.error = action.payload?.msg;
        state.numberOfTokens = 0;
        state.principalID = action.payload?.principal || '';
      })
      .addCase(revalidateCollections.pending, (state) => {
        state.validating = true;
        state.error = undefined;
      })
      .addCase(revalidateCollections.fulfilled, (state, action) => {
        const cols = action.payload.collections;

        state.validating = false;
        state.error = undefined;
        state.collections = cols;
        state.numberOfTokens = cols.reduce((a, b) => a + b.tokens.length, 0);
        state.principalID = action.payload.principal;
      })
      .addCase(revalidateCollections.rejected, (state, action) => {
        state.validating = false;
        state.collections = [];
        state.error = action.payload?.msg;
        state.numberOfTokens = 0;
        state.principalID = action.payload?.principal || '';
      });
  },
});

export const {} = collectionSlice.actions;
export const collectionState = (state: RootState) => state.collection;

export default collectionSlice.reducer;
