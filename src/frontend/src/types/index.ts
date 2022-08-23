export type ModeType = "light" | "dark" | "system";

export interface Listing {
  canisterId: string;
  price: number;
}

export interface StatsData {
  canisterId: string;
  price: number;
}

export interface Canister {
  name: string;
  canister: string;
}
