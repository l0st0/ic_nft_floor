import { Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { revalidateCollections } from '../../store/slices/collection';
import { validateData } from '../../store/slices/data';

export const ResetButtons = () => {
  const dispatch = useAppDispatch();

  const { validating } = useAppSelector((state) => state.collection);
  const { validating: dataValidating, error } = useAppSelector((state) => state.data);

  const resetData = () => {
    dispatch(validateData());
  };

  return (
    <>
      <Tooltip disableFocusListener title='Use when you bought or sold NFT'>
        <LoadingButton
          onClick={() => dispatch(revalidateCollections())}
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
