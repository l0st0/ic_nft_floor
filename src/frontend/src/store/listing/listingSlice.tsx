import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Canister, Listing } from '../../types';
import listingService from './listingService';

interface ListingState {
  canisters: Canister[];
  listings: Listing[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ListingState = {
  canisters: [],
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

export const updateCanisters = createAsyncThunk<
  Canister[],
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/updateCanisters', async (_, { rejectWithValue }) => {
  const message = 'There was an error while updating canisters.';
  try {
    return await listingService.updateCanisters();
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
        state.listings = [];
      })
      .addCase(updateCanisters.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCanisters.fulfilled, (state, action) => {
        state.loading = false;
        state.canisters = action.payload;
      })
      .addCase(updateCanisters.rejected, (state, action) => {
        state.loading = false;
        state.canisters = [];
      });
  },
});

export const {} = listingSlice.actions;
export const listingState = (state: RootState) => state.listing;

export default listingSlice.reducer;
