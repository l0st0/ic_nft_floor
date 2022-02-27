import type { Principal } from '@dfinity/principal';
export interface CanisterData { 'price' : number, 'canisterId' : string }
export interface Canisters { 'name' : string, 'canister' : string }
export interface PriceData { 'date' : string, 'price' : number }
export interface Stats { 'data' : Array<CanisterData>, 'time' : string }
export interface _SERVICE {
  'addStats' : (arg_0: Stats) => Promise<undefined>,
  'getCanisters' : () => Promise<Array<Canisters>>,
  'getPrice' : () => Promise<PriceData>,
  'getStat' : (arg_0: string) => Promise<[] | [Stats]>,
  'getStats' : () => Promise<Array<Stats>>,
  'updateCanisters' : (arg_0: Array<Canisters>) => Promise<Array<Canisters>>,
  'updatePrice' : (arg_0: PriceData) => Promise<PriceData>,
}
