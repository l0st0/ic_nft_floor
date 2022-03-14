export type ModeType = 'light' | 'dark' | 'system';

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
