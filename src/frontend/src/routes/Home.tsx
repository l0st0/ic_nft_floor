import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { NftList } from '../components/NftList';
import { TotalIcpValue } from '../components/TotalIcpValue';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCollections } from '../store/slices/collection';
import { getData } from '../store/slices/data';

export const Home = () => {
  const dispatch = useAppDispatch();

  const { collections, error, principalID, validating } = useAppSelector((state) => state.collection);
  const { error: dataError } = useAppSelector((state) => state.data);

  if (dataError) {
    return (
      <Stack alignItems='center' spacing={2}>
        <span>There was some error when fetching data</span>
        <Button onClick={() => dispatch(getData({}))}>Fetch again</Button>
      </Stack>
    );
  }

  if (error && principalID.length) {
    return (
      <Stack alignItems='center' spacing={2}>
        {error ? <span>There was some error when getting collections</span> : <span>We found no collections :/</span>}

        <LoadingButton
          loading={validating}
          startIcon={<Refresh />}
          loadingPosition='start'
          onClick={() => dispatch(getCollections({ principalID, validate: true }))}
        >
          {validating ? 'Trying to fetch' : 'Try again'}
        </LoadingButton>
      </Stack>
    );
  }

  if (!collections.length && !principalID.length) return null;
  // return (
  //   <Stack alignItems='center' spacing={2}>
  //     <span>There might be some problem with fetching collections because of subnet.</span>
  //   </Stack>
  // );

  return !!collections.length ? (
    <>
      <TotalIcpValue />
      <NftList />
    </>
  ) : (
    <Stack alignItems='center' spacing={2}>
      No collection found.
    </Stack>
  );
};

export default Home;
