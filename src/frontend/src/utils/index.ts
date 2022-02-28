import { NFTCollection } from '@psychedelic/dab-js';
import { ModifyCollectionsInterface, ModNFTCollectionType } from '../types';

const removeFromCanisterList = ['vlhm2-4iaaa-aaaam-qaatq-cai', 'lhq4n-3yaaa-aaaai-qaniq-cai'];

export const transformCollectionResponse = (collections: NFTCollection[]): NFTCollection[] =>
  collections
    .map((item) => {
      let canisterId = item.canisterId;

      // Punks
      if (canisterId === 'qcg3w-tyaaa-aaaah-qakea-cai') {
        canisterId = 'bxdf4-baaaa-aaaah-qaruq-cai';
      }

      // Turtle
      if (canisterId === 'fl5nr-xiaaa-aaaai-qbjmq-cai') {
        canisterId = 'jeghr-iaaaa-aaaah-qco7q-cai';
      }

      // Drip
      if (canisterId === 'd3ttm-qaaaa-aaaai-qam4a-cai') {
        canisterId = '3db6u-aiaaa-aaaah-qbjbq-cai';
      }

      // Cats
      if (canisterId === '4nvhy-3qaaa-aaaah-qcnoq-cai') {
        canisterId = 'y3b7h-siaaa-aaaah-qcnwa-cai';
      }

      // Bunny
      if (canisterId === 'xkbqi-2qaaa-aaaah-qbpqq-cai') {
        canisterId = 'q6hjz-kyaaa-aaaah-qcama-cai';
      }

      return { ...item, canisterId };
    })
    .filter((item) => {
      const findSame = removeFromCanisterList.some((can) => can === item.canisterId);

      if (findSame) return false;

      return true;
    });

export const sortByObjectKey = (unordered: {}) => {
  return Object.keys(unordered)
    .sort()
    .reduce((obj: any, key) => {
      // @ts-ignore
      obj[key] = unordered[key];
      return obj;
    }, {});
};

export const sortCollection = (col: ModNFTCollectionType[]): ModNFTCollectionType[] => {
  return col.map((item) => {
    const sortItems = sortByObjectKey(item);
    const tokens = item.tokens.map((data) => {
      const sortTokens = sortByObjectKey(data);

      return sortTokens;
    });

    return { ...sortItems, tokens };
  });
};

export const formatPrice = (price: number, digits = 0, currency = false) => {
  const options: { style?: string; currency?: string } = {};

  if (currency) {
    options.style = 'currency';
    options.currency = 'USD';
  }

  return price.toLocaleString('en-US', { ...options, maximumFractionDigits: digits });
};

export const modifyCollections = ({ collections, listings, stats }: ModifyCollectionsInterface) => {
  const data = collections
    .map((item) => {
      const listingData = listings.find((data) => data.canisterId === item.canisterId);

      const statData = stats.map((stat) => {
        const filterData = stat.data.filter(({ canisterId }) => canisterId === item.canisterId);

        const price = filterData[0]?.price || 0;

        return { time: stat.time, price: price * item.tokens.length };
      });

      let floorPrice = 0;
      let totalPrice = 0;

      if (listingData) {
        floorPrice = listingData.price;
        totalPrice = listingData.price * item.tokens.length;
      }

      return { ...item, floorPrice, totalPrice, stats: statData };
    })
    .sort((a, b) => b.totalPrice - a.totalPrice);

  const totalCollectionsPrice = {
    actual: data.reduce((a, b) => a + b.totalPrice, 0),
    oneHour: data.reduce((a, b) => a + b.stats[1]?.price || 0, 0),
    day: data.reduce((a, b) => a + b.stats[24]?.price || 0, 0),
    week: data.reduce((a, b) => a + b.stats[168]?.price || 0, 0),
  };

  return { data, totalCollectionsPrice };
};
