import { ContentCopy } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { BeerIcon } from '../icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export const DonateButton = () => {
  const [open, setOpen] = React.useState(localStorage.getItem('showDonate') || '1');

  const handleClickOpen = () => {
    setOpen('1');
  };

  const handleClose = () => {
    setOpen('0');
    localStorage.setItem('showDonate', '0');
  };

  return (
    <>
      <Button id='basic-button' onClick={handleClickOpen}>
        Donate
      </Button>

      <Dialog
        open={open === '1'}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Buy me a beer <BeerIcon width={28} height={28} style={{ marginBottom: -4 }} />
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText sx={{ mb: 2 }}>
            If you like the app and want to support development you can drop here some ICP. Thanks a lot for every
            support!
          </DialogContentText>
          <CopyToClipboard text='13effab268401a29ddd6d4b1eb83ce0ce5e7c259465c5d5990881441e0e09c4c'>
            <Stack flexDirection='row' alignItems='center'>
              <IconButton size='small'>
                <ContentCopy fontSize='small' />
              </IconButton>
              <Stack fontSize={13}>13effab268401a29ddd6d4b1eb83ce0ce5e7c259465c5d5990881441e0e09c4c</Stack>
            </Stack>
          </CopyToClipboard>
        </DialogContent>
      </Dialog>
    </>
  );
};
