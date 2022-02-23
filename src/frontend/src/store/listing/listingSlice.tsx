import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Listing } from '../../types';
import listingService from './listingService';

interface ListingState {
  listings: Listing[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ListingState = {
  listings: [],
  loading: false,
  error: undefined,
};

export const getListings = createAsyncThunk<
  Listing[],
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/getListings', async (_, { rejectWithValue }) => {
  const message = 'There was an error while getting listings.';
  try {
    return await listingService.getListingData();
  } catch (err) {
    return rejectWithValue(message);
  }
});

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListings.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getListings.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.listings = action.payload;
      })
      .addCase(getListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = listingSlice.actions;
export const listingState = (state: RootState) => state.listing;

export default listingSlice.reducer;
