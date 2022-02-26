import { NFTCollection } from '@psychedelic/dab-js';
import { Theme } from '@mui/material';

export type ModeType = 'light' | 'dark' | 'system';

export type DropDownDataType = {
  label: string;
  icon: string | undefined;
  id: string;
};

export type TokensType = {
  url: string;
  index: string;
  nri: string;
};

export type ModNFTCollectionType = Pick<NFTCollection, 'name' | 'canisterId' | 'icon'> & {
  tokens: TokensType[];
  floorPrice: number;
  totalPrice: number;
};

export interface ContextInterface {
  loadingNfts: boolean;
  updatingNfts: boolean;
  nftCollections: ModNFTCollectionType[];
  getCurrentCollection: (canisterId: string) => ModNFTCollectionType;
  dropdownData: DropDownDataType[];
  updateCollection: () => void;
  allTokensCount: number;
}

export interface DarkModeContextInterface {
  mode: ModeType;
  theme: Theme;
  changeTheme: (mode: ModeType) => void;
}

export interface NriData {
  [key: string]: number[];
}

export interface GetNriInterface {
  canister: string;
  index: number;
}

export interface UseSortTokensInterface {
  collection: ModNFTCollectionType | null;
  sortVal: number;
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
