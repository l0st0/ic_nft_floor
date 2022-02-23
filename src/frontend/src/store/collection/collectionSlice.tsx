import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModNFTCollectionType } from '../../types';
import collectionService from './collectionService';

interface CollectionState {
  collections: ModNFTCollectionType[];
  numberOfTokens: number;
  totalCollectionsPrice: number;
  loading: boolean;
  checking: boolean;
  error?: string;
}

const initialState: CollectionState = {
  collections: [],
  numberOfTokens: 0,
  totalCollectionsPrice: 0,
  loading: false,
  checking: false,
  error: undefined,
};

export const getCollections = createAsyncThunk<
  ModNFTCollectionType[],
  { principal: string },
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/getCollections', async ({ principal }, { rejectWithValue, getState }) => {
  try {
    const collections = await collectionService.getCollections({ principal });
    if (!collections.length) return rejectWithValue('No collections found for this principal.');

    const { listings } = getState().listing;

    const data = collections
      .map((item) => {
        const listingData = listings.find((data) => data.canisterId === item.canisterId);

        let floorPrice = 0;
        let totalPrice = 0;

        if (listingData) {
          floorPrice = listingData.price;
          totalPrice = listingData.price * item.tokens.length;
        }

        return { ...item, floorPrice, totalPrice };
      })
      .sort((a, b) => b.totalPrice - a.totalPrice);

    return data;
  } catch (err) {
    const message = 'There was an error while getting collections.';
    return rejectWithValue(message);
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
        const cols = action.payload;

        state.loading = false;
        state.error = undefined;
        state.collections = cols;

        state.totalCollectionsPrice = cols.reduce((a, b) => a + b.totalPrice, 0);
        state.numberOfTokens = cols.reduce((a, b) => a + b.tokens.length, 0);
      })
      .addCase(getCollections.rejected, (state, action) => {
        state.loading = false;
        state.collections = [];
        state.error = action.payload;
        state.numberOfTokens = 0;
      });
  },
});

export const {} = collectionSlice.actions;
export const collectionState = (state: RootState) => state.collection;

export default collectionSlice.reducer;
