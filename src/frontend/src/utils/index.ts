import { NFTCollection } from '@psychedelic/dab-js';

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

      return !findSame;
    });

export const formatPrice = (price: number, digits = 0, currency = false) => {
  const options: { style?: string; currency?: string } = {};

  if (currency) {
    options.style = 'currency';
    options.currency = 'USD';
  }

  return price.toLocaleString('en-US', { ...options, maximumFractionDigits: digits });
};
