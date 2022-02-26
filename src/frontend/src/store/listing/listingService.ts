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

    const getStat = await backend.getLastStat();

    if (!getStat.length || getStat[0]?.time !== date) {
      await backend.addStats({ data: results, time: date });
    }
  } catch (error) {
    console.log(error);
  }

  return results;
};

const listingService = { getListingData };

export default listingService;
