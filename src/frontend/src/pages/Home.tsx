import { Refresh } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Alert, Button, Stack } from "@mui/material";
import { NftList } from "../components/NftList";
import { Search } from "../components/Search";
import { TopBar } from "../components/TopBar";
import { TotalIcpValue } from "../components/TotalIcpValue";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getCollections } from "../store/slices/collection";
import { getData } from "../store/slices/data";

export const Home = () => {
  const dispatch = useAppDispatch();

  const {
    collections,
    error: collectionError,
    validating,
  } = useAppSelector((state) => state.collection);
  const { principalID } = useAppSelector((state) => state.common);
  const { error: dataError, listings } = useAppSelector((state) => state.data);

  const displayCollections =
    !dataError && !collectionError && !!collections.length && !!listings.length;

  return (
    <>
      <TopBar />
      <Search />

      <Alert severity="warning" sx={{ mb: 4 }}>
        The app will be no more maintained. Please visit amazing
        <a href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/"> NFTGEEK </a>
        site!
      </Alert>

      {dataError && (
        <Stack alignItems="center" spacing={2}>
          <span>There was some error when fetching data</span>
          <Button onClick={() => dispatch(getData({}))}>Fetch again</Button>
        </Stack>
      )}

      {collectionError && (
        <Stack alignItems="center" spacing={2}>
          <span>There was some error when getting collections</span>

          <LoadingButton
            loading={validating}
            startIcon={<Refresh />}
            loadingPosition="start"
            onClick={() =>
              dispatch(getCollections({ principalID, validate: true }))
            }
          >
            {validating ? "Trying to fetch" : "Try again"}
          </LoadingButton>
        </Stack>
      )}

      {displayCollections ? (
        <>
          <TotalIcpValue />
          <Alert severity="info">
            The reasons why the collection is not displaying might be - not
            listed on Entrepot or not registred in dab.ooo
          </Alert>

          <NftList />
        </>
      ) : (
        <Stack alignItems="center" spacing={2}>
          No collection found.
        </Stack>
      )}
    </>
  );
};

export default Home;
