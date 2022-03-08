import { Add, PlaylistAdd } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

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
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
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