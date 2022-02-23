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

export const callCanister = async (actor: ActorSubclass<any>, method: string): Promise<any> => {
  try {
    const result = await actor[method]();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const to32bits = (num: number) => {
  const b = new ArrayBuffer(4);
  new DataView(b).setUint32(0, num);
  return Array.from(new Uint8Array(b));
};

export const tokenIdentifier = (principal: string, index: number) => {
  const padding = Buffer.from('\x0Atid');
  const array = new Uint8Array([...padding, ...Principal.fromText(principal).toUint8Array(), ...to32bits(index)]);
  return Principal.fromUint8Array(array).toText();
};

export const getOffsetIndex = (index: number, canisterId: string) => {
  if (canisterId !== 'jeghr-iaaaa-aaaah-qco7q-cai') {
    return index + 1;
  }

  return index;
};

export const transformListingResponse = (response: any, canisterId: string): Listing[] => {
  return response.map((record: any) => {
    return {
      canisterId,
      price: Number(record[1].price) / 100000000,
    };
  });
};
