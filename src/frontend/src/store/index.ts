import { configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collection/collectionSlice';
import darkModeSlice from './darkMode/dakrModeSlice';
import listingSlice from './listing/listingSlice';
import priceSlice from './price/priceSlice';

export const store = configureStore({
  reducer: {
    collection: collectionSlice,
    listing: listingSlice,
    price: priceSlice,
    darkMode: darkModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
