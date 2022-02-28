import { callCanister, getActor, transformListingResponse } from '../../utils/boundary';
import { PromisePool } from '@supercharge/promise-pool';
import { backend } from '../../../../declarations/backend';
import axios from 'axios';
import { Canister } from '../../types';

//@ts-ignore
import { idlFactory } from '../../dids/ape.did';

const getListingData = async () => {
  let canisters: Canister[] = [];

  try {
    canisters = await backend.getCanisters();
  } catch (error) {
    try {
      canisters = await updateCanisters();
    } catch (error) {
      throw error;
    }
  }

  const { results, errors } = await PromisePool.withConcurrency(35)
    .for(canisters)
    .process(async (can, index, pool) => {
      const actor = getActor(idlFactory, can.canister);
      const response = await callCanister(actor, 'stats');

      return transformListingResponse(response, can.canister);
    });

  if (errors.length) {
    console.log('errors', errors);
  }

  return results;
};

const updateCanisters = async () => {
  const { data } = await axios.get('https://www.todayweb.net/api/nftfloor/updateCanisters');

  const cans: { canister: string; name: string }[] = data.data;

  if (cans.length) {
    await backend.updateCanisters(cans);
  }

  return cans;
};

const listingService = { getListingData, updateCanisters };

export default listingService;
