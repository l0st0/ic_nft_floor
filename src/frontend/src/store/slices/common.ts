import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModeType } from '../../types';

interface CommonState {
  theme: ModeType;
  mode: PaletteMode;
  showIcp: boolean;
}

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState: CommonState = {
  theme: 'system',
  mode: 'light',
  showIcp: true,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ModeType>) => {
      state.theme = action.payload;

      if (action.payload === 'system') {
        state.mode = prefersDarkMode ? 'dark' : 'light';
      } else {
        state.mode = action.payload;
      }
    },
    toggleShowIcp: (state, action: PayloadAction<boolean>) => {
      state.showIcp = action.payload;
    },
  },
});

export const { changeTheme, toggleShowIcp } = commonSlice.actions;
export const darkModeState = (state: RootState) => state.common;

export default commonSlice.reducer;
