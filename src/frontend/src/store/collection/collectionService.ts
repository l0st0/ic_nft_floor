import { getAllUserNFTs } from '@psychedelic/dab-js';
import { modifyCollection } from '../../utils';

const removeFromList = ['vlhm2-4iaaa-aaaam-qaatq-cai', 'po6n2-uiaaa-aaaaj-qaiua-cai', 'lhq4n-3yaaa-aaaai-qaniq-cai'];

const getCollections = async ({ principal }: { principal: string }) => {
  const fetchCollections = await getAllUserNFTs({ user: principal });

  const modified = modifyCollection(fetchCollections)
    .map((item) => {
      let canisterId = item.canisterId;

      // Punks
      if (canisterId === 'qcg3w-tyaaa-aaaah-qakea-cai') {
        canisterId = 'bxdf4-baaaa-aaaah-qaruq-cai';
      }

      // Turtle
      if (canisterId === 'fl5nr-xiaaa-aaaai-qbjmq-cai') {
        canisterId = 'jeghr-iaaaa-aaaah-qco7q-cai';
      }

      // Drip
      if (canisterId === 'd3ttm-qaaaa-aaaai-qam4a-cai') {
        canisterId = '3db6u-aiaaa-aaaah-qbjbq-cai';
      }

      // Cats
      if (canisterId === '4nvhy-3qaaa-aaaah-qcnoq-cai') {
        canisterId = 'y3b7h-siaaa-aaaah-qcnwa-cai';
      }

      // Bunny
      if (canisterId === 'xkbqi-2qaaa-aaaah-qbpqq-cai') {
        canisterId = 'q6hjz-kyaaa-aaaah-qcama-cai';
      }

      return { ...item, canisterId };
    })
    .filter((item) => {
      const findSame = removeFromList.some((can) => can === item.canisterId);

      if (findSame) return false;

      return true;
    });

  return modified;
};

const collectionService = { getCollections };

export default collectionService;
