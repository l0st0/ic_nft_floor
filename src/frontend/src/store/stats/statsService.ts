import { backend } from '../../../../declarations/backend';
// import { dummyStats as stats } from '../../data/stats';

const getStats = async () => {
  const stats = await backend.getStats();

  const modified = stats.sort((a, b) => parseInt(b.time) - parseInt(a.time));

  return modified;
};

const listingService = { getStats };

export default listingService;
