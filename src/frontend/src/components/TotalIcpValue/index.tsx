import { Button, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleShowIcp } from '../../store/common/commonSlice';
import { formatPrice, modifyCollections } from '../../utils';
import { StatsBox } from '../StatsBox';

export const TotalIcpValue = () => {
  const { showIcp } = useAppSelector((state) => state.common);
  const { collections } = useAppSelector((state) => state.collection);
  const { listings } = useAppSelector((state) => state.listing);
  const { stats } = useAppSelector((state) => state.stats);
  const { price } = useAppSelector((state) => state.price);

  const dispatch = useAppDispatch();

  const { totalCollectionsPrice } = modifyCollections({ collections, listings, stats });

  const toggleCurrency = () => {
    dispatch(toggleShowIcp(!showIcp));
  };

  const displayBox = (value: 'actual' | 'oneHour' | 'day' | 'week') => {
    if (value === 'actual') {
      const totalVal = showIcp
        ? formatPrice(totalCollectionsPrice.actual, 2)
        : formatPrice(totalCollectionsPrice.actual * price);

      return <StatsBox title='Actual' value={`${totalVal} ${showIcp ? 'ICP' : 'USD'}`} />;
    } else {
      let val = totalCollectionsPrice.oneHour;
      let title = '1h';

      if (value === 'day') {
        val = totalCollectionsPrice.day;
        title = '24h';
      } else if (value === 'week') {
        val = totalCollectionsPrice.week;
        title = '7d';
      }

      const percent = val ? (1 - totalCollectionsPrice.actual / val) * 100 : 0;

      return <StatsBox title={title} percent={percent} haveValue={val > 0} />;
    }
  };

  return (
    <>
      <Stack flexDirection='row'>
        <Typography variant='h5' fontWeight={600} mr={1}>
          Total value
        </Typography>

        <Button onClick={toggleCurrency} variant='outlined' size='small' sx={{ fontSize: '12px', minWidth: '50px' }}>
          Switch to {!showIcp ? 'ICP' : 'USD'}
        </Button>
      </Stack>

      <Grid container spacing={2} rowSpacing={1} mb={3} mt={1} textAlign='center'>
        <Grid item>{displayBox('actual')}</Grid>

        <Grid item>{displayBox('oneHour')}</Grid>

        <Grid item>{displayBox('day')}</Grid>

        <Grid item>{displayBox('week')}</Grid>

        <Grid item>
          <StatsBox title='More' value='SOON' />
        </Grid>
      </Grid>
    </>
  );
};
