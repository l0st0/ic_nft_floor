import { LoadingButton } from '@mui/lab';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateCanisters } from '../store/slices/data';

export const Update = () => {
  const [scc, setScc] = React.useState(false);
  const dispatch = useAppDispatch();
  const { updateCanLoading } = useAppSelector((state) => state.data);

  const onClick = async () => {
    const can = await dispatch(updateCanisters()).unwrap();

    console.log('can', can);

    if (can.length) {
      setScc(true);
    }
  };

  return (
    <LoadingButton disabled={scc} loading={updateCanLoading} onClick={onClick} variant='contained'>
      {scc ? 'Updated' : 'Update canister list'}
    </LoadingButton>
  );
};
