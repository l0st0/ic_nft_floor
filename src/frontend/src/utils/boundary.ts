import fetch from 'cross-fetch';
import { Actor, ActorSubclass, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';
import { Principal } from '@dfinity/principal';
import { Listing } from '../types';

const agent = new HttpAgent({
  host: 'https://boundary.ic0.app',
  fetch: fetch,
});

export const getActor = (idlFactory: IDL.InterfaceFactory, canisterId: string) => {
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
};

export const callCanister = async (actor: ActorSubclass<any>, method: 'stats', account?: string): Promise<any> => {
  try {
    if (account) {
      return await actor[method](account);
    }
    return await actor[method]();
  } catch (e) {
    console.log(e);
  }
};

export const transformListingResponse = (response: any, canisterId: string): Listing => {
  let price = 0;

  if (response[3]) {
    price = Number((Number(response[3]) / 100000000).toFixed(2));
  }

  return {
    canisterId,
    price,
  };
};
