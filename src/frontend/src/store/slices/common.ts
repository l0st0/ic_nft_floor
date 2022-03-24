import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ModeType } from '../../types';

export type PrincipalIdListType = {
  id: number;
  name: string;
  principal: string;
};

interface CommonState {
  theme: ModeType;
  mode: PaletteMode;
  showIcp: boolean;
  principalID: string;
  principalList: PrincipalIdListType[];
}

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState: CommonState = {
  theme: 'system',
  mode: 'light',
  showIcp: true,
  principalID: '',
  principalList: [],
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
    signPrincipalID: (state, action: PayloadAction<string>) => {
      state.principalID = action.payload;
    },
    addPrincipalIdToList: (state, action: PayloadAction<PrincipalIdListType>) => {
      state.principalList = [...state.principalList, { ...action.payload, id: state.principalList.length + 1 }];
    },
    removePrincipalIdFromList: (state, action: PayloadAction<number>) => {
      state.principalList = state.principalList.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { changeTheme, toggleShowIcp, signPrincipalID, addPrincipalIdToList, removePrincipalIdFromList } =
  commonSlice.actions;
export const darkModeState = (state: RootState) => state.common;

export default commonSlice.reducer;
