import { Add, Delete, PlaylistAdd } from '@mui/icons-material';
import React from 'react';
import { Controller, useForm, UseFormSetValue } from 'react-hook-form';
import { Transition } from '../../DialogTransition';
import truncate from 'lodash/truncate';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addPrincipalIdToList, PrincipalIdListType, removePrincipalIdFromList } from '../../../store/slices/common';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  TextField,
} from '@mui/material';

interface PrincipalListButtonProps {
  setValue: UseFormSetValue<{ principalID: string }>;
}

export const PrincipalListButton = ({ setValue }: PrincipalListButtonProps) => {
  const [open, setOpen] = React.useState(false);
  const [addingNew, setAddingNew] = React.useState(false);

  const dispatch = useAppDispatch();
  const { principalList } = useAppSelector((state) => state.common);

  React.useEffect(() => {
    if (!open) {
      setAddingNew(false);
    }
  }, [open]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PrincipalIdListType>({ defaultValues: { name: '', principal: '' } });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPrincipalSelect = (id: string) => {
    setValue('principalID', id);
    setOpen(false);
  };

  const onSubmit = (values: PrincipalIdListType) => {
    setAddingNew(false);
    dispatch(addPrincipalIdToList(values));
    reset();
  };

  const submitForm = (e: any) => {
    e.stopPropagation();
    const makeSubmit = handleSubmit(onSubmit);
    makeSubmit(e);
  };

  const removePrincipalId = (id: number) => {
    dispatch(removePrincipalIdFromList(id));
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} sx={{ mx: 1 }}>
        <PlaylistAdd />
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
        maxWidth='md'
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Principal ID list</DialogTitle>
        <DialogContent dividers>
          {principalList.map(({ name, principal, id }) => (
            <List key={id} dense sx={{ width: '100%' }}>
              <ListItem
                disablePadding
                secondaryAction={
                  <IconButton onClick={() => removePrincipalId(id)} edge='end'>
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemButton onClick={() => onPrincipalSelect(principal)}>
                  {name} | {truncate(principal, { length: 14 })}
                </ListItemButton>
              </ListItem>
            </List>
          ))}

          {addingNew ? (
            <Stack component='form' onSubmit={submitForm} spacing={1} mt={1}>
              <Controller
                control={control}
                name='name'
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    autoFocus
                    fullWidth
                    id='name'
                    placeholder='Name'
                    variant='outlined'
                    error={!!errors.name}
                    helperText={!!errors.name && 'Name is required.'}
                    value={value}
                    size='small'
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name='principal'
                rules={{ required: true, maxLength: 63, minLength: 63 }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    id='principal'
                    placeholder='Principal ID'
                    variant='outlined'
                    error={!!errors.principal}
                    helperText={!!errors.principal && 'Enter valid principal.'}
                    value={value}
                    size='small'
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
                )}
              />

              <Button type='submit' sx={{ mt: 1 }} variant='contained' startIcon={<Add />} fullWidth>
                Add
              </Button>
            </Stack>
          ) : (
            <Button onClick={() => setAddingNew(true)} sx={{ mt: 1 }} variant='contained' startIcon={<Add />} fullWidth>
              Add new
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
