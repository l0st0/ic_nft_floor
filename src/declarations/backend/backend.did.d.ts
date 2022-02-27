import type { Principal } from '@dfinity/principal';
export interface CanisterData { 'price' : number, 'canisterId' : string }
export interface PriceData { 'date' : string, 'price' : number }
export interface Stats { 'data' : Array<CanisterData>, 'time' : string }
export interface _SERVICE {
  'addStats' : (arg_0: Stats) => Promise<undefined>,
  'getPrice' : () => Promise<PriceData>,
  'getStat' : (arg_0: string) => Promise<[] | [Stats]>,
  'getStats' : () => Promise<Array<Stats>>,
  'updatePrice' : (arg_0: PriceData) => Promise<PriceData>,
}
