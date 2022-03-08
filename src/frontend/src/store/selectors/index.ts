import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectModifyCollection = createSelector(
  (state: RootState) => state,
  ({ collection, data }) => {
    const { collections } = collection;
    const { listings, stats } = data;

    const collectionWithPrice = collections
      .map((col) => {
        const findListing = listings.find((data) => data.canisterId === col.canisterId);

        const statData = stats.map((stat) => {
          const findStat = stat.data.filter(({ canisterId }) => canisterId === col.canisterId);

          const price = findStat[0]?.price || 0;

          return { time: stat.time, price: price * col.tokens.length };
        });

        let floorPrice = 0;
        let totalPrice = 0;

        if (findListing) {
          floorPrice = findListing.price;
          totalPrice = findListing.price * col.tokens.length;
        }

        return { ...col, floorPrice, totalPrice, stats: statData };
      })
      .sort((a, b) => b.totalPrice - a.totalPrice);

    const totalCollectionsPrice = {
      actual: collectionWithPrice.reduce((a, b) => a + b.totalPrice, 0),
      oneHour: collectionWithPrice.reduce((a, b) => a + b.stats[1]?.price || 0, 0),
      day: collectionWithPrice.reduce((a, b) => a + b.stats[24]?.price || 0, 0),
      week: collectionWithPrice.reduce((a, b) => a + b.stats[168]?.price || 0, 0),
    };

    return { collectionWithPrice, totalCollectionsPrice };
  }
);

export const selectChartData = createSelector(
  (state: RootState) => state,
  (_: any, actualPrice: number) => actualPrice,
  ({ data, collection }, actualPrice) => {
    const { stats } = data;
    const { collections } = collection;

    const chartData = stats.map((stat) => {
      const filterCanistersByCollection = stat.data
        .filter((item) => {
          return collections.some((c) => c.canisterId === item.canisterId);
        })
        .map((item) => {
          const find = collections.find((c) => item.canisterId === c.canisterId);

          if (find?.tokens.length) {
            return find.tokens.length * item.price;
          }

          return 0;
        })
        .reduce((a, b) => a + b, 0);

      return { time: new Date(stat.time), price: filterCanistersByCollection };
    });

    chartData.unshift({ time: new Date(), price: actualPrice });

    return chartData;
  }
);
