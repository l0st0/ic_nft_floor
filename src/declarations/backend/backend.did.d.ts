import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Canisters { 'name' : string, 'canister' : string }
export interface PriceData { 'date' : string, 'price' : number }
export interface _SERVICE {
  'getCanisters' : ActorMethod<[], Array<Canisters>>,
  'getPrice' : ActorMethod<[], PriceData>,
  'updateCanisters' : ActorMethod<[Array<Canisters>], Array<Canisters>>,
  'updatePrice' : ActorMethod<[PriceData], PriceData>,
}
