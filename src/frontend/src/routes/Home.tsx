import { CircularProgress, Stack } from '@mui/material';
import { NftList } from '../components/NftList';
import { TotalValuesList } from '../components/TotalValuesList';
import { useAppSelector } from '../hooks';

export const Home = () => {
  const { loading, collections, error } = useAppSelector((state) => state.collection);
  const { loading: loadingListings, error: listingError } = useAppSelector((state) => state.listing);
  const { error: priceError, loading: loadingPrice } = useAppSelector((state) => state.price);
  const { loading: loadingStats } = useAppSelector((state) => state.stats);

  if (loadingPrice)
    return (
      <Stack alignItems='center' spacing={2}>
        <CircularProgress /> <span>Getting price...</span>
      </Stack>
    );

  if (loadingListings)
    return (
      <Stack alignItems='center' spacing={2}>
        <CircularProgress /> <span>Getting listings...</span>
      </Stack>
    );

  // if (loadingStats)
  //   return (
  //     <Stack alignItems='center' spacing={2}>
  //       <CircularProgress /> <span>Getting stats...</span>
  //     </Stack>
  //   );

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
      <TotalValuesList />
      <NftList />
    </>
  );
};

export default Home;
