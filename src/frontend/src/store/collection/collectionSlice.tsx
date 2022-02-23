import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModNFTCollectionType } from '../../types';
import { getListings } from '../listing/listingSlice';
import { getPrice } from '../price/priceSlice';
import collectionService from './collectionService';

interface CollectionState {
  collections: ModNFTCollectionType[];
  numberOfTokens: number;
  totalCollectionsPrice: number;
  principal: string;
  loading: boolean;
  checking: boolean;
  error?: string;
}

const initialState: CollectionState = {
  collections: [],
  numberOfTokens: 0,
  totalCollectionsPrice: 0,
  principal: '',
  loading: false,
  checking: false,
  error: undefined,
};

export const getCollections = createAsyncThunk<
  { data: ModNFTCollectionType[]; principal: string },
  { principal: string },
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/getCollections', async ({ principal }, { dispatch, rejectWithValue, getState }) => {
  try {
    const collections = await collectionService.getCollections({ principal });
    if (!collections.length) return rejectWithValue('No collections found for this principal.');

    let { listings } = getState().listing;
    const { price } = getState().price;

    if (!listings.length) {
      listings = await dispatch(getListings()).unwrap();
    }

    if (!price || price === 0) {
      await dispatch(getPrice());
    }

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

    return { data, principal };
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
        const cols = action.payload.data;

        state.loading = false;
        state.error = undefined;
        state.collections = cols;
        state.principal = action.payload.principal;

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
