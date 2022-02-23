import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import priceService from './priceService';

interface PriceState {
  price: number;
  loading: boolean;
  error: string | undefined;
}

const initialState: PriceState = {
  price: 0,
  loading: false,
  error: undefined,
};

export const getPrice = createAsyncThunk<
  number,
  void,
  {
    rejectValue: string;
  }
>('collection/getPrice', async (_, { rejectWithValue }) => {
  try {
    return await priceService.getPriceData();
  } catch (err) {
    const message = 'There was an error while getting price.';
    return rejectWithValue(message);
  }
});

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrice.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.price = action.payload;
      })
      .addCase(getPrice.rejected, (state, action) => {
        state.loading = false;
        state.price = initialState.price;
        state.error = action.payload;
      });
  },
});

export const {} = priceSlice.actions;
export const priceState = (state: RootState) => state.price;

export default priceSlice.reducer;
