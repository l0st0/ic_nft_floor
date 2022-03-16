import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getCollections } from '../../../store/slices/collection';
import { getData } from '../../../store/slices/data';

export const ResetButtons = () => {
  const dispatch = useAppDispatch();

  const { validating } = useAppSelector((state) => state.collection);
  const { principalID } = useAppSelector((state) => state.common);
  const { validating: dataValidating, error } = useAppSelector((state) => state.data);

  const resetData = () => {
    dispatch(getData({ validate: true }));
  };

  return (
    <>
      <Tooltip disableFocusListener title='Use when you bought or sold NFT'>
        <LoadingButton
          onClick={() => dispatch(getCollections({ principalID, validate: true }))}
          loading={validating}
          disabled={!!error}
          loadingPosition='start'
          startIcon={<Refresh />}
        >
          {validating ? 'Validating collection' : 'Validate collection'}
        </LoadingButton>
      </Tooltip>

      <Tooltip disableFocusListener title='Validate listings, stats and price'>
        <LoadingButton
          onClick={resetData}
          disabled={!!error}
          loading={dataValidating}
          loadingPosition='start'
          startIcon={<Refresh />}
        >
          {dataValidating ? 'Validating data' : 'Reset data'}
        </LoadingButton>
      </Tooltip>
    </>
  );
};
