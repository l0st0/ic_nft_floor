import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import collectionSlice from './slices/collection';
import commonSlice from './slices/common';
import dataSlice from './slices/data';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedCommon = persistReducer(persistConfig, commonSlice);

export const store = configureStore({
  reducer: {
    common: persistedCommon,
    collection: collectionSlice,
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
