import { ArrowDownward, Refresh } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react';
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title='Use to update when you bought or sold NFT'>
        <LoadingButton
          onClick={() => dispatch(revalidateCollections({ principal: principalID }))}
          variant='text'
          loading={validating}
          disabled={fetchingError}
          loadingPosition='start'
          startIcon={<Refresh />}
        >
          {validating ? 'Revalidating collections' : 'Revalidate collections'}
        </LoadingButton>
      </Tooltip>
      <div>
        <LoadingButton
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          startIcon={<ArrowDownward />}
          loading={listingLoading || statsLoading || priceLoading}
          loadingPosition='start'
        >
          Refresh
        </LoadingButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <LoadingButton
              onClick={() => dispatch(getListings())}
              variant='text'
              loading={listingLoading}
              disabled={fetchingError}
              loadingPosition='start'
              startIcon={<Refresh />}
            >
              Listings
            </LoadingButton>{' '}
          </MenuItem>
          <MenuItem>
            <LoadingButton
              onClick={() => dispatch(getStats())}
              variant='text'
              loading={statsLoading}
              disabled={fetchingError}
              loadingPosition='start'
              startIcon={<Refresh />}
            >
              Stats
            </LoadingButton>
          </MenuItem>
          <MenuItem>
            <LoadingButton
              onClick={() => dispatch(getPrice())}
              variant='text'
              loading={priceLoading}
              disabled={fetchingError}
              loadingPosition='start'
              startIcon={<Refresh />}
            >
              Price
            </LoadingButton>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
