import { getAllUserNFTs, getCachedUserNFTs } from '@psychedelic/dab-js';
import { transformCollectionResponse } from '../../utils';

const getCollections = async ({ principal }: { principal: string }) => {
  const collections = await getCachedUserNFTs({ userPID: principal });

  const modified = transformCollectionResponse(collections);

  return modified;
};

const revalidateCollections = async ({ principal }: { principal: string }) => {
  const collections = await getAllUserNFTs({ user: principal });

  const modified = transformCollectionResponse(collections);

  return modified;
};

const collectionService = { getCollections, revalidateCollections };

export default collectionService;
