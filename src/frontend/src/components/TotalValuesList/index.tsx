import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks';

export const TotalValuesList = () => {
  const { numberOfTokens, totalCollectionsPrice } = useAppSelector((state) => state.collection);
  const { price } = useAppSelector((state) => state.price);

  return (
    <Grid container justifyContent='center' spacing={4} rowSpacing={1} pb={2}>
      <Grid item>
        <Typography fontSize={18} fontWeight={600} component='span' variant='body2' color='text.primary'>
          Tokens
        </Typography>
        {` — ${numberOfTokens}`}
      </Grid>

      <Grid item>
        <Typography fontSize={18} fontWeight={600} component='span' variant='body2' color='text.primary'>
          ICP Value
        </Typography>
        {` — ${totalCollectionsPrice.toFixed(2)} ICP`}
      </Grid>

      <Grid item>
        <Typography fontSize={18} fontWeight={600} component='span' variant='body2' color='text.primary'>
          USD Value
        </Typography>
        {` — ${(totalCollectionsPrice * price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })}`}
      </Grid>

      <Grid item>
        <Typography fontSize={18} fontWeight={600} component='span' variant='body2' color='text.primary'>
          USD Price
        </Typography>
        {` — ${price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })}`}
      </Grid>
    </Grid>
  );
};
