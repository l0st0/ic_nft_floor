import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { NftList } from '../components/NftList';
import { Search } from '../components/Search';
import { TopBar } from '../components/TopBar';
import { TotalIcpValue } from '../components/TotalIcpValue';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCollections } from '../store/slices/collection';
import { getData } from '../store/slices/data';

export const Home = () => {
  const dispatch = useAppDispatch();

  const { collections, error: collectionError, validating } = useAppSelector((state) => state.collection);
  const { principalID } = useAppSelector((state) => state.common);
  const { error: dataError, stats, listings } = useAppSelector((state) => state.data);

  const displayCollections =
    !dataError && !collectionError && !!collections.length && !!stats.length && !!listings.length;

  return (
    <>
      <TopBar />
      <Search />

      {dataError && (
        <Stack alignItems='center' spacing={2}>
          <span>There was some error when fetching data</span>
          <Button onClick={() => dispatch(getData({}))}>Fetch again</Button>
        </Stack>
      )}

      {collectionError && (
        <Stack alignItems='center' spacing={2}>
          <span>There was some error when getting collections</span>

          <LoadingButton
            loading={validating}
            startIcon={<Refresh />}
            loadingPosition='start'
            onClick={() => dispatch(getCollections({ principalID, validate: true }))}
          >
            {validating ? 'Trying to fetch' : 'Try again'}
          </LoadingButton>
        </Stack>
      )}

      {displayCollections ? (
        <>
          <TotalIcpValue />
          <NftList />
        </>
      ) : (
        <Stack alignItems='center' spacing={2}>
          <span>No collection found.</span>
        </Stack>
      )}
    </>
  );
};

export default Home;
