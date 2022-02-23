import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
// import { collections } from '../../data/dummy';
import { useAppSelector } from '../../hooks';

export const NftList = () => {
  const { collections } = useAppSelector((state) => state.collection);
  const { price } = useAppSelector((state) => state.price);
  const { mode } = useAppSelector((state) => state.darkMode);

  return (
    <Grid container justifyContent='center' spacing={2} rowSpacing={-1}>
      {collections.map((item, index) => {
        return (
          <Grid key={index} item>
            <List sx={{ width: 280, maxWidth: 280, bgcolor: 'background.paper' }}>
              <ListItem alignItems='flex-start' sx={mode === 'dark' ? { border: '1px solid grey' } : { boxShadow: 2 }}>
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontWeight: 600 }}
                  secondary={
                    <Stack component='span'>
                      <span>
                        <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                          Tokens
                        </Typography>
                        {` — ${item.tokens.length}`}
                      </span>

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
                            {` — ${item.floorPrice.toFixed(2)} ICP`}
                          </span>
                          <span>
                            <Typography
                              sx={{ display: 'inline' }}
                              component='span'
                              variant='body2'
                              color='text.primary'
                            >
                              ICP Value
                            </Typography>
                            {` — ${item.totalPrice?.toFixed(2)} ICP`}
                          </span>
                          <span>
                            <Typography
                              sx={{ display: 'inline' }}
                              component='span'
                              variant='body2'
                              color='text.primary'
                            >
                              USD Value
                            </Typography>
                            {` — ${(item?.totalPrice * price).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              maximumFractionDigits: 0,
                            })}`}
                          </span>
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
  );
};
