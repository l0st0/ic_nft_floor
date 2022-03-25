import { Button, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectModifyCollection } from '../../store/selectors';
import { toggleShowIcp } from '../../store/slices/common';
import { formatPrice } from '../../utils';
import { Chart } from '../Chart';
import { StatsBox } from '../StatsBox';

export const TotalIcpValue = () => {
  const { showIcp } = useAppSelector((state) => state.common);
  const { price } = useAppSelector((state) => state.data);
  const { totalCollectionsPrice } = useAppSelector(selectModifyCollection);

  const dispatch = useAppDispatch();

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

  const gridStyle = { width: { xs: '100%', md: 'auto' } };

  return (
    <>
      <Stack flexDirection='row' alignItems='flex-start'>
        <Typography variant='h6' fontWeight={600} mr={1}>
          Total value
        </Typography>

        <Button onClick={toggleCurrency} variant='outlined' size='small' sx={{ fontSize: '12px', minWidth: '50px' }}>
          Switch to {!showIcp ? 'ICP' : 'USD'}
        </Button>
      </Stack>

      <Chart />

      <Grid container spacing={2} rowSpacing={1} mb={3} mt={1} textAlign='center'>
        <Grid sx={gridStyle} item>
          {displayBox('actual')}
        </Grid>

        <Grid sx={gridStyle} item>
          {displayBox('oneHour')}
        </Grid>

        <Grid sx={gridStyle} item>
          {displayBox('day')}
        </Grid>

        <Grid sx={gridStyle} item>
          {displayBox('week')}
        </Grid>

        <Grid sx={gridStyle} item>
          <StatsBox title='More' value='SOON' />
        </Grid>
      </Grid>
    </>
  );
};
