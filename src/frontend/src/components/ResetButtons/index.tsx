import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { revalidateCollections } from '../../store/collection/collectionSlice';
import { getListings } from '../../store/listing/listingSlice';
import { getPrice } from '../../store/price/priceSlice';
import { getStats } from '../../store/stats/statsSlice';

export const ResetButtons = () => {
  const dispatch = useAppDispatch();

  const { validating, principalID } = useAppSelector((state) => state.collection);
  const { loading: listingLoading } = useAppSelector((state) => state.listing);
  const { loading: statsLoading } = useAppSelector((state) => state.stats);
  const { loading: priceLoading } = useAppSelector((state) => state.price);
  const { fetchingError } = useAppSelector((state) => state.common);

  const resetData = () => {
    dispatch(getListings());
    dispatch(getStats());
    dispatch(getPrice());
  };

  return (
    <>
      <Tooltip disableFocusListener title='Use when you bought or sold NFT'>
        <LoadingButton
          onClick={() => dispatch(revalidateCollections({ principal: principalID }))}
          loading={validating}
          disabled={fetchingError}
          loadingPosition='start'
          startIcon={<Refresh />}
        >
          {validating ? 'Validating collection' : 'Validate collection'}
        </LoadingButton>
      </Tooltip>
      <Tooltip disableFocusListener title='Validate listings, stats and price'>
        <LoadingButton
          onClick={resetData}
          disabled={fetchingError}
          loading={listingLoading || statsLoading || priceLoading}
          loadingPosition='start'
          startIcon={<Refresh />}
        >
          {listingLoading || statsLoading || priceLoading ? 'Validating data' : 'Validate data'}
        </LoadingButton>
      </Tooltip>
    </>
  );
};
