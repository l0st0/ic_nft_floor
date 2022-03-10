import { Add, PlaylistAdd } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { Transition } from '../../DialogTransition';

interface PrincipalListButtonProps {
  setValue: UseFormSetValue<{ principalID: string }>;
}

export const PrincipalListButton = ({ setValue }: PrincipalListButtonProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    setValue('principalID', 'lolo');
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} sx={{ mx: 1 }}>
        <PlaylistAdd />
      </IconButton>

      <Dialog
        open={open}
        fullWidth
        TransitionComponent={Transition}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-container': {
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        }}
        disableScrollLock
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Principal ID list</DialogTitle>
        <DialogContent dividers>
          <Button variant='contained' startIcon={<Add />} fullWidth>
            Add new
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
