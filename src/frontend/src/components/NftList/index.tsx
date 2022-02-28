import { TrendingDown, TrendingUp } from '@mui/icons-material';
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from '../../hooks';
import { formatPrice, modifyCollections } from '../../utils';

export const NftList = () => {
  const { collections, numberOfTokens } = useAppSelector((state) => state.collection);
  const { listings } = useAppSelector((state) => state.listing);
  const { stats } = useAppSelector((state) => state.stats);
  const { price } = useAppSelector((state) => state.price);
  const { mode, showIcp } = useAppSelector((state) => state.common);

  const { data } = modifyCollections({ collections, listings, stats });

  return (
    <Stack mt={5}>
      <Typography variant='h5' fontWeight={600} mb={1}>
        Collection of {numberOfTokens} tokens
      </Typography>

      <Grid container spacing={2} rowSpacing={-1}>
        {data.map((item, index) => {
          const hourOldPrice = item.stats[1]?.price || 0;
          const dayOldPrice = item.stats[24]?.price || 0;

          const hourPercent = hourOldPrice ? (1 - item.totalPrice / hourOldPrice) * 100 : 0;
          const dayPercent = dayOldPrice ? (1 - item.totalPrice / dayOldPrice) * 100 : 0;

          const renderPercent = (percent: number) => (
            <>
              <Box
                component={percent < 0 ? TrendingUp : TrendingDown}
                sx={{ color: percent < 0 ? 'success.dark' : 'error.dark', fontSize: '14px', verticalAlign: 'sub' }}
              ></Box>
              <Box
                component='span'
                sx={{
                  color: percent < 0 ? 'success.dark' : 'error.dark',
                  display: 'inline',
                  fontWeight: 'medium',
                  mx: 0.5,
                }}
              >
                {Math.abs(percent).toFixed(2)}%
              </Box>
            </>
          );

          return (
            <Grid key={index} item>
              <List sx={{ width: 283, maxWidth: 283, bgcolor: 'background.paper' }}>
                <ListItem
                  alignItems='flex-start'
                  sx={mode === 'dark' ? { border: '1px solid grey' } : { boxShadow: 2 }}
                >
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.icon} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${item.tokens.length}x - ${item.name}`}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 600,
                      style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      },
                    }}
                    secondary={
                      <Stack component='span'>
                        {item.floorPrice > 0 ? (
                          <>
                            <span>
                              <Typography
                                sx={{ display: 'inline' }}
                                component='span'
                                variant='body2'
                                color='text.primary'
                              >
                                Floor price
                              </Typography>
                              {showIcp
                                ? ` — ${formatPrice(item.floorPrice, 2)} ICP`
                                : ` — ${formatPrice(item.floorPrice * price, 0, true)}`}
                            </span>
                            <span>
                              <Typography
                                sx={{ display: 'inline' }}
                                component='span'
                                variant='body2'
                                color='text.primary'
                              >
                                Total value
                              </Typography>
                              {showIcp
                                ? ` — ${formatPrice(item.totalPrice, 2)} ICP`
                                : ` — ${formatPrice(item?.totalPrice * price, 0, true)}`}
                            </span>
                            {hourOldPrice ? (
                              <span>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component='span'
                                  variant='body2'
                                  color='text.primary'
                                >
                                  1h
                                </Typography>
                                {` — `} {renderPercent(hourPercent)}
                              </span>
                            ) : null}
                            {dayOldPrice ? (
                              <span>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component='span'
                                  variant='body2'
                                  color='text.primary'
                                >
                                  24h
                                </Typography>
                                {` — `} {renderPercent(dayPercent)}
                              </span>
                            ) : null}
                          </>
                        ) : (
                          <span>
                            It seems we get no listings for this NFT :/ Please message me on Twitter @losto229. Thanks.
                          </span>
                        )}
                      </Stack>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
