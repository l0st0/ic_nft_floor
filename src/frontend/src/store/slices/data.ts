import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Canister, Listing, Stats } from '../../types';
import { listingService, statsService, priceService } from '../services';

interface DataState {
  canisters: Canister[];
  listings: Listing[];
  stats: Stats[];
  price: number;
  loading: boolean;
  validating: boolean;
  updateCanLoading: boolean;
  error: string | undefined;
}

const initialState: DataState = {
  canisters: [],
  listings: [],
  stats: [],
  price: 0,
  loading: false,
  validating: false,
  updateCanLoading: false,
  error: undefined,
};

export const getData = createAsyncThunk<
  { listings: Listing[]; stats: Stats[]; price: number },
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/getData', async (_, { rejectWithValue }) => {
  try {
    const listings = await listingService.getListingData();
    const stats = await statsService.getStats();
    const price = await priceService.getPrice();

    return { listings, stats, price };
  } catch (err) {
    return rejectWithValue('There was an error while getting data.');
  }
});

export const validateData = createAsyncThunk<
  { listings: Listing[]; stats: Stats[]; price: number },
  void,
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/validateData', async (_, { rejectWithValue }) => {
  try {
    const listings = await listingService.getListingData();
    const stats = await statsService.getStats();
    const price = await priceService.getPrice();

    return { listings, stats, price };
  } catch (err) {
    return rejectWithValue('There was an error while getting data.');
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

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.listings = action.payload.listings;
        state.stats = action.payload.stats;
        state.price = action.payload.price;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(validateData.pending, (state) => {
        state.validating = true;
        state.error = undefined;
      })
      .addCase(validateData.fulfilled, (state, action) => {
        state.validating = false;
        state.error = undefined;
        state.listings = action.payload.listings;
        state.stats = action.payload.stats;
        state.price = action.payload.price;
      })
      .addCase(validateData.rejected, (state, action) => {
        state.validating = false;
        state.error = action.payload;
      })
      .addCase(updateCanisters.pending, (state) => {
        state.updateCanLoading = true;
      })
      .addCase(updateCanisters.fulfilled, (state, action) => {
        state.updateCanLoading = false;
        state.canisters = action.payload;
      })
      .addCase(updateCanisters.rejected, (state) => {
        state.updateCanLoading = false;
        state.canisters = [];
      });
  },
});

export const {} = dataSlice.actions;
export const dataState = (state: RootState) => state.data;

export default dataSlice.reducer;
