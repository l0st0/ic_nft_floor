import type { Principal } from '@dfinity/principal';
export interface PriceData { 'date' : string, 'price' : number }
export interface _SERVICE {
  'getPrice' : () => Promise<PriceData>,
  'updatePrice' : (arg_0: number, arg_1: string) => Promise<PriceData>,
}
