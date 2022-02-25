import axios from 'axios';
import { backend } from '../../../../declarations/backend';

const getPriceData = async () => {
  const { date, price } = await backend.getPrice();

  const newDate = new Date().getTime();
  const getDate = new Date(date).getTime();

  const updatedRecently = getDate > newDate;

  if (price > 0 && updatedRecently) return price;

  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd'
  );

  const { usd } = data['internet-computer'];

  const now = new Date();
  const futureDate = new Date(now.getTime() + 1 * 60000).toISOString();

  try {
    await backend.updatePrice({ price: Number(usd), date: futureDate });
  } catch (error) {
    console.log(error);
  }

  return usd;
};

const collectionService = { getPriceData };

export default collectionService;
