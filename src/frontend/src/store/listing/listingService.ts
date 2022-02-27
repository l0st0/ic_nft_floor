import { callCanister, getActor } from '../../utils/boundary';
// import { canisters } from '../../data/canisters';
import { PromisePool } from '@supercharge/promise-pool';
import { backend } from '../../../../declarations/backend';

//@ts-ignore
import { idlFactory } from '../../dids/ape.did';
import axios from 'axios';
import { Canister } from '../../types';

const _isCanister = (c: string) => {
  return c.length == 27 && c.split('-').length == 5;
};

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

      let price = 0;

      if (response[3]) {
        price = Number((Number(response[3]) / 100000000).toFixed(2));
      }

      return {
        canisterId: can.canister,
        price: price /* + Math.floor(Math.random() * (10 - -10 + 1)) + -10 */,
      };
    });

  if (errors.length) {
    console.log('errors', errors);
  }

  try {
    const newDate = new Date();
    const hour = newDate.getHours();
    const date = newDate.setHours(hour, 0, 0, 0).toString();
    const offset = new Date().getTimezoneOffset();
    const allowOffset = offset % 60 === 0;

    if (allowOffset) {
      const getStat = await backend.getStat(date);

      if (!getStat.length) {
        await backend.addStats({ data: results, time: date });
      }
    }
  } catch (error) {
    console.log(error);
  }

  return results;
};

const updateCanisters = async () => {
  const { data }: { data: { id: string; name: string }[] } = await axios.get(
    'https://us-central1-entrepot-api.cloudfunctions.net/api/collections'
  );

  const modCanister = data.map((a) => ({ name: a.name, canister: a.id })).filter((a) => _isCanister(a.canister));

  if (modCanister.length) {
    await backend.updateCanisters(modCanister);
  }

  return modCanister;
};

const listingService = { getListingData, updateCanisters };

export default listingService;
