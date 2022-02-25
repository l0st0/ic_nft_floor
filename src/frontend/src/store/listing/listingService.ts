import { callCanister, getActor } from '../../utils/boundary';
import { canisters } from '../../data/canisters';
import { PromisePool } from '@supercharge/promise-pool';
import { backend } from '../../../../declarations/backend';

//@ts-ignore
import { idlFactory } from '../../dids/ape.did';

const getListingData = async () => {
  const { results, errors } = await PromisePool.withConcurrency(35)
    .for(canisters)
    .process(async (can, index, pool) => {
      const actor = getActor(idlFactory, can.canister);
      const response = await callCanister(actor, 'stats');

      let price = 0;

      if (response[3]) {
        price = Number((Number(response[3]) / 100000000).toFixed(2));
      }

      return { canisterId: can.canister, price };
    });

  if (errors.length) {
    console.log('errors', errors);
  }

  try {
    const hours = new Date().getHours();
    const newD = new Date().setHours(hours, 0, 0, 0);
    const date = new Date(newD).toISOString();

    const exists = await backend.getStatByKey(date);

    if (!exists.length && results.length) {
      await backend.addStats({ data: results, time: date });
    }
  } catch (error) {
    console.log(error);
  }

  return results;
};

const listingService = { getListingData };

export default listingService;
