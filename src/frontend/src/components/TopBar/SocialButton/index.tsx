import React from 'react';
import { Twitter, GitHub } from '@mui/icons-material';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Link } from '@mui/material';
import { Transition } from '../../DialogTransition';
import { ConnectIcon } from '../../icons';

export const SocialButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton id='basic-button' onClick={handleClickOpen}>
        <ConnectIcon color='primary' />
      </IconButton>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        }}
        disableScrollLock
        maxWidth={false}
      >
        <DialogTitle sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Let's connect!
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText sx={{ mb: 2 }}>Feel free to follow or contact me :)</DialogContentText>

          <Grid container justifyContent='center' alignItems='center' spacing={3}>
            <Grid item>
              <Link component={IconButton} href='https://twitter.com/losto229' rel='noreferrer' target='_blank'>
                <Twitter sx={{ fontSize: 32, color: '#1DA1F2' }} />
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={IconButton}
                href='https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/u/losto'
                rel='noreferrer'
                target='_blank'
              >
                <img src='/dscvr_logo.png' width={30} alt='dscvr' />
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={IconButton}
                href='https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/losto'
                rel='noreferrer'
                target='_blank'
              >
                <img src='/district_logo.jpeg' width={30} alt='discrikt' />
              </Link>
            </Grid>

            <Grid item>
              <Link component={IconButton} href='https://github.com/l0st0' rel='noreferrer' target='_blank'>
                <GitHub sx={{ fontSize: 32 }} />
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
