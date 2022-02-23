import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModeType } from '../../types';

interface DarkModeState {
  theme: ModeType;
  mode: PaletteMode;
}

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getMode = () => {
  const getFromLocalStorage = localStorage.getItem('mode') as ModeType;

  if (!getFromLocalStorage || getFromLocalStorage === 'system') {
    return prefersDarkMode ? 'dark' : 'light';
  }

  return getFromLocalStorage;
};

const initialState: DarkModeState = {
  theme: (localStorage.getItem('mode') as ModeType) || 'system',
  mode: getMode(),
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
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
  },
});

export const { changeTheme } = darkModeSlice.actions;
export const darkModeState = (state: RootState) => state.darkMode;

export default darkModeSlice.reducer;
