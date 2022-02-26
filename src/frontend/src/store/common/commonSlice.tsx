import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModeType } from '../../types';

interface CommonState {
  theme: ModeType;
  mode: PaletteMode;
  showIcp: boolean;
  headerWidth: number;
}

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getMode = () => {
  const getFromLocalStorage = localStorage.getItem('mode') as ModeType;

  if (!getFromLocalStorage || getFromLocalStorage === 'system') {
    return prefersDarkMode ? 'dark' : 'light';
  }

  return getFromLocalStorage;
};

const initialState: CommonState = {
  theme: (localStorage.getItem('mode') as ModeType) || 'system',
  mode: getMode(),
  showIcp: true,
  headerWidth: 0,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ModeType>) => {
      localStorage.setItem('mode', action.payload);
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
    signHeaderWidth: (state, action: PayloadAction<number>) => {
      state.headerWidth = action.payload;
    },
  },
});

export const { changeTheme, signHeaderWidth, toggleShowIcp } = commonSlice.actions;
export const darkModeState = (state: RootState) => state.common;

export default commonSlice.reducer;
