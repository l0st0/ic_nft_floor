import { AppDispatch } from '.';
import { getCollections } from './collection/collectionSlice';
import { getListings } from './listing/listingSlice';
import { getPrice } from './price/priceSlice';

export const getAllData =
  ({ principal }: { principal: string }) =>
  async (dispatch: AppDispatch) => {
    dispatch(getPrice());
    await dispatch(getListings());
    await dispatch(getCollections({ principal }));
  };
