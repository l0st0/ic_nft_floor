import { getAllUserNFTs, getCachedUserNFTs } from '@psychedelic/dab-js';
import { transformCollectionResponse } from '../../utils';

const getCollections = async ({ principalID, validate }: { principalID: string; validate: boolean }) => {
  let collectionResponse = [];

  if (validate) {
    collectionResponse = await getAllUserNFTs({ user: principalID });
  } else {
    collectionResponse = await getCachedUserNFTs({ userPID: principalID });
  }

  return transformCollectionResponse(collectionResponse);
};

export default { getCollections };
