import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { Listing } from "../../types";
import { listingService, priceService } from "../services";

interface DataState {
  listings: Listing[];
  price: number;
  loading: boolean;
  validating: boolean;
  error: string | undefined;
}

const initialState: DataState = {
  listings: [],
  price: 0,
  loading: false,
  validating: false,
  error: undefined,
};

export const getData = createAsyncThunk<
  { listings: Listing[]; price: number },
  { validate?: boolean },
  {
    rejectValue: string;
    state: RootState;
  }
>(
  "collection/getData",
  async ({ validate = false }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(toggleLoading(validate));

      let listings = [];
      let price = 0;

      await Promise.all([
        (listings = await listingService.getListingData()),
        (price = await priceService.getPrice()),
      ]);

      return { listings, price };
    } catch (err) {
      return rejectWithValue("There was an error while getting data.");
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
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
        state.price = action.payload.price;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.validating = false;
        state.error = action.payload;
      });
  },
});

export const { toggleLoading } = dataSlice.actions;
export const dataState = (state: RootState) => state.data;

export default dataSlice.reducer;
