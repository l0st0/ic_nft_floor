import { CircularProgress, Stack } from '@mui/material';
import { NftList } from '../components/NftList';
import { TotalIcpValue } from '../components/TotalIcpValue';
import { useAppSelector } from '../hooks';

export const Home = () => {
  const { loading, collections, error } = useAppSelector((state) => state.collection);
  const { loading: loadingListings, error: listingError } = useAppSelector((state) => state.listing);
  const { error: priceError, loading: loadingPrice } = useAppSelector((state) => state.price);
  const { loading: loadingStats } = useAppSelector((state) => state.stats);

  if (loadingListings || loadingPrice || loadingStats)
    return (
      <Stack alignItems='center' spacing={2}>
        <CircularProgress /> <span>Getting listings...</span>
      </Stack>
    );

  if (loading)
    return (
      <Stack alignItems='center' spacing={2}>
        <CircularProgress /> <span>Getting collections...</span>
      </Stack>
    );

  if (error || listingError || priceError) {
    return (
      <Stack alignItems='center' spacing={2}>
        {error || listingError || priceError}
      </Stack>
    );
  }

  if (!collections.length) {
    return (
      <Stack alignItems='center' spacing={2}>
        No collections found.
      </Stack>
    );
  }

  return (
    <>
      <TotalIcpValue />
      <NftList />
    </>
  );
};

export default Home;
