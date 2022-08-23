import {
  callCanister,
  getActor,
  transformListingResponse,
} from "../../utils/boundary";
import { PromisePool } from "@supercharge/promise-pool";
import { backend } from "../../../../declarations/backend";
import { Canister } from "../../types";

// @ts-ignore
import { idlFactory } from "../../dids/ape.did";

const getListingData = async () => {
  let canisters: Canister[] = [];

  try {
    canisters = await backend.getCanisters();
  } catch (error) {
    console.log("error", error);
  }

  console.log("canisters", canisters);

  const { results, errors } = await PromisePool.withConcurrency(35)
    .for(canisters)
    .process(async (can, index, pool) => {
      const actor = getActor(idlFactory, can.canister);
      const response = await callCanister(actor, "stats");

      return transformListingResponse(response, can.canister);
    });

  if (errors.length) {
    console.log("errors", errors);
  }

  return results;
};

export default { getListingData };
