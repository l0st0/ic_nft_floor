import { configureStore } from '@reduxjs/toolkit';

import collectionSlice from './slices/collection';
import commonSlice from './slices/common';
import dataSlice from './slices/data';

export const store = configureStore({
  reducer: {
    common: commonSlice,
    collection: collectionSlice,
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
