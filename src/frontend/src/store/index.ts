import { configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collection/collectionSlice';
import commonSlice from './common/commonSlice';
import listingSlice from './listing/listingSlice';
import statsSlice from './stats/statsSlice';
import priceSlice from './price/priceSlice';

export const store = configureStore({
  reducer: {
    common: commonSlice,
    collection: collectionSlice,
    listing: listingSlice,
    stats: statsSlice,
    price: priceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
