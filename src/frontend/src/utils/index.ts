import { NFTCollection } from '@psychedelic/dab-js';
import collections from '../data/nri.json';
import { NriData, GetNriInterface, ModNFTCollectionType } from '../types';

const nriData: NriData = collections;

export const getNri = ({ canister, index }: GetNriInterface) => {
  if (typeof nriData[canister] !== 'undefined') {
    const value = nriData[canister][index];
    return String((value * 100).toFixed(1));
  }

  return '';
};

export const modifyCollection = (collections: NFTCollection[]) =>
  collections.map(({ name, canisterId, icon, tokens }) => {
    return {
      name,
      canisterId,
      icon: String(icon) || '',
      tokens: tokens.map((data) => {
        const index = data?.index?.toString() || '';
        let url = data.url;
        let nri = getNri({ canister: canisterId, index: parseInt(index) });

        if (canisterId === 'pk6rk-6aaaa-aaaae-qaazq-cai') {
          url = data.url.replace('pk6rk-6aaaa-aaaae-qaazq-cai', '7budn-wqaaa-aaaah-qcsba-cai');
        }

        return { url, index, nri };
      }),
    };
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
