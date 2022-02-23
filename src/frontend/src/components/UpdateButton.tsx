import LoadingButton from '@mui/lab/LoadingButton';
import CachedIcon from '@mui/icons-material/Cached';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllData } from '../store/actions';

export const UpdateButton = () => {
  const dispatch = useAppDispatch();
  const { checking } = useAppSelector((state) => state.collection);

  const update = async () => {
    // dispatch(getAllData());
  };

  return (
    <LoadingButton
      loading={checking}
      loadingPosition='start'
      startIcon={<CachedIcon />}
      color='inherit'
      variant='text'
      onClick={update}
    >
      {checking ? 'Validating' : 'Validate'} collections
    </LoadingButton>
  );
};
