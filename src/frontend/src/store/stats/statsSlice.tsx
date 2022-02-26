import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Stats } from '../../types';
import statsService from './statsService';

interface StatsState {
  stats: Stats[];
  loading: boolean;
  error: string | undefined;
}

const initialState: StatsState = {
  stats: [],
  loading: false,
  error: undefined,
};

export const getStats = createAsyncThunk<
  Stats[],
  void,
  {
    rejectValue: string;
  }
>('collection/getStats', async (_, { rejectWithValue }) => {
  const message = 'There was an error while getting stats.';
  try {
    return await statsService.getStats();
  } catch (err) {
    return rejectWithValue(message);
  }
});

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.stats = action.payload;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = statsSlice.actions;
export const StatsState = (state: RootState) => state.stats;

export default statsSlice.reducer;
