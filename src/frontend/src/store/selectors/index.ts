import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectModifyCollection = createSelector(
  (state: RootState) => state,
  ({ collection, data }) => {
    const { collections } = collection;
    const { listings } = data;

    const collectionWithPrice = collections
      .map((col) => {
        const findListing = listings.find(
          (data) => data.canisterId === col.canisterId
        );

        let floorPrice = 0;
        let totalPrice = 0;

        if (findListing) {
          floorPrice = findListing.price;
          totalPrice = findListing.price * col.tokens.length;
        }

        return { ...col, floorPrice, totalPrice };
      })
      .filter(({ floorPrice }) => floorPrice)
      .sort((a, b) => b.totalPrice - a.totalPrice);

    const totalCollectionsPrice = {
      actual: collectionWithPrice.reduce((a, b) => a + b.totalPrice, 0),
      oneHour: collectionWithPrice.reduce((a, b) => a + 0, 0),
      day: collectionWithPrice.reduce((a, b) => a + 0, 0),
      week: collectionWithPrice.reduce((a, b) => a + 0, 0),
    };

    return { collectionWithPrice, totalCollectionsPrice };
  }
);
