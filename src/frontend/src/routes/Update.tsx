import { LoadingButton } from '@mui/lab';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateCanisters } from '../store/listing/listingSlice';

export const Update = () => {
  const [scc, setScc] = React.useState(false);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.listing);

  const onClick = async () => {
    const can = await dispatch(updateCanisters()).unwrap();

    if (can.length) {
      setScc(true);
    }
  };

  return (
    <LoadingButton disabled={scc} loading={loading} onClick={onClick} variant='contained'>
      {scc ? 'Updated' : 'Update canister list'}
    </LoadingButton>
  );
};
