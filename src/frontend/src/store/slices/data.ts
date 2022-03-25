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
  { validate?: boolean },
  {
    rejectValue: string;
    state: RootState;
  }
>('collection/getData', async ({ validate = false }, { rejectWithValue, dispatch }) => {
  try {
    dispatch(toggleLoading(validate));

    let listings = [];
    let stats = [];
    let price = 0;

    await Promise.all([
      (listings = await listingService.getListingData()),
      (stats = await statsService.getStats()),
      (price = await priceService.getPrice()),
    ]);

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
      .addCase(getData.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.validating = false;
        state.error = undefined;
        state.listings = action.payload.listings;
        state.stats = action.payload.stats;
        state.price = action.payload.price;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
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

export const { toggleLoading } = dataSlice.actions;
export const dataState = (state: RootState) => state.data;

export default dataSlice.reducer;
