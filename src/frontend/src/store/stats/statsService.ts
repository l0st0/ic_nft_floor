import { backend } from '../../../../declarations/backend';
// import { stats } from '../../data/dummy';

const getStats = async () => {
  const stats = await backend.getStats();

  const modified = stats.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return modified;
};

const listingService = { getStats };

export default listingService;
