import { NFTCollection } from '@psychedelic/dab-js';

export type ModeType = 'light' | 'dark' | 'system';

export interface ModNFTCollectionType extends NFTCollection {
  floorPrice: number;
  totalPrice: number;
  stats: {
    time: string;
    price: number;
  }[];
}

export interface Listing {
  canisterId: string;
  price: number;
}

export interface StatsData {
  canisterId: string;
  price: number;
}

export interface Stats {
  data: StatsData[];
  time: string;
}

export interface Canister {
  name: string;
  canister: string;
}

export interface ModifyCollectionsInterface {
  collections: NFTCollection[];
  listings: Listing[];
  stats: Stats[];
}
