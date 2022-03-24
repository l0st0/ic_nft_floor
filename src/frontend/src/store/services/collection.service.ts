import { getAllUserNFTs, getCachedUserNFTs } from '@psychedelic/dab-js';
import { transformCollectionResponse } from '../../utils';

const getCachedCollections = async ({ principalID }: { principalID: string }) => {
  const collections = await getCachedUserNFTs({ userPID: principalID });

  const modified = transformCollectionResponse(collections);

  return modified;
};

const revalidateCollections = async ({ principalID }: { principalID: string }) => {
  const collections = await getAllUserNFTs({ user: principalID });

  const modified = transformCollectionResponse(collections);

  return modified;
};

export default { getCachedCollections, revalidateCollections };
