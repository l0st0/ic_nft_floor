import axios from 'axios';
import { Stats } from '../../types';
// import { dummyStats as stats } from '../../data/stats';

const getStats = async () => {
  const { data } = await axios.get('https://www.todayweb.net/api/nftfloor/stats');

  const stats: Stats[] = data.data;

  return stats;
};

export default { getStats };
