import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { NftList } from '../components/NftList';
import { TotalIcpValue } from '../components/TotalIcpValue';
import { useAppDispatch, useAppSelector } from '../hooks';
import { revalidateCollections } from '../store/collection/collectionSlice';
import { toggleFetchingError } from '../store/common/commonSlice';
import { getListings } from '../store/listing/listingSlice';
import { getPrice } from '../store/price/priceSlice';
import { getStats } from '../store/stats/statsSlice';

export const Home = () => {
  const dispatch = useAppDispatch();

  const { collections, error, principalID, validating } = useAppSelector((state) => state.collection);
  const { error: listingError } = useAppSelector((state) => state.listing);
  const { error: priceError } = useAppSelector((state) => state.price);
  const { error: statsError } = useAppSelector((state) => state.stats);

  const isErr = listingError || priceError || statsError;

  React.useEffect(() => {
    const run = async () => {
      if (isErr) {
        dispatch(toggleFetchingError(true));
      } else {
        dispatch(toggleFetchingError(false));
      }
    };

    run();
  }, [isErr]);

  const refetchData = () => {
    dispatch(getPrice());
    dispatch(getListings());
    dispatch(getStats());
  };

  if (isErr) {
    return (
      <Stack alignItems='center' spacing={2}>
        <span>There was some error when fetching data</span>
        <Button onClick={refetchData}>Fetch again</Button>
      </Stack>
    );
  }

  if ((!collections.length || error) && principalID.length) {
    return (
      <Stack alignItems='center' spacing={2}>
        {!error ? <span>There was some error when getting collections</span> : <span>We found no collections :/</span>}

        <LoadingButton
          loading={validating}
          startIcon={<Refresh />}
          loadingPosition='start'
          onClick={() => dispatch(revalidateCollections({ principal: principalID }))}
        >
          {validating ? 'Trying to fetch' : 'Try again'}
        </LoadingButton>
      </Stack>
    );
  }

  if (!collections.length && !principalID.length) return null;

  return (
    <>
      <TotalIcpValue />
      <NftList />
    </>
  );
};

export default Home;
