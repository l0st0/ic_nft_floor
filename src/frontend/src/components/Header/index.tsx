import React from 'react';
import { Button, FormControlLabel, Stack, TextField, Checkbox } from '@mui/material';
import useComponentSize from '@rehooks/component-size';
import { ThemeButton } from '../ThemeButton';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllData } from '../../store/actions';
import { Controller, useForm } from 'react-hook-form';
import { DfinityBadge } from '../DfinityBadge';
import { StyledMainHeading } from './styles';

interface Form {
  principal: string;
}

export const Header = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.collection);
  const { loading: listingLoading } = useAppSelector((state) => state.listing);

  const headingRef = React.useRef(null);
  const { width } = useComponentSize(headingRef);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = async ({ principal }: Form) => {
    dispatch(getAllData({ principal }));
  };

  return (
    <>
      <Stack display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
        <DfinityBadge />
        <ThemeButton />
      </Stack>

      <Stack display='flex' alignItems='center' width='100%' padding={3} mb={1} textAlign='center'>
        <StyledMainHeading
          ref={headingRef}
          variant='h3'
          sx={{
            typography: {
              xs: { fontSize: 34 },
              sm: { fontSize: 40 },
              md: { fontSize: 54 },
            },
          }}
        >
          Calculate floor value of NFTs
        </StyledMainHeading>
        <Stack
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          width={width}
          mt={2}
          flexWrap='nowrap'
          maxWidth='100%'
          alignItems='normal'
          gap={0}
        >
          <Stack flexDirection='row' width='100%'>
            <Controller
              control={control}
              name='principal'
              defaultValue={localStorage.getItem('principal') || ''}
              rules={{ required: true, maxLength: 63, minLength: 63 }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  disabled={loading || listingLoading}
                  id='principalInput'
                  placeholder='Enter your principal'
                  variant='outlined'
                  error={!!errors.principal}
                  helperText={!!errors.principal && 'Enter valid principal.'}
                  fullWidth
                  sx={{ mr: 2 }}
                  value={value}
                  size='small'
                  onChange={(e) => {
                    localStorage.setItem('principal', e.target.value);
                    onChange(e.target.value);
                  }}
                />
              )}
            />

            <Button
              disabled={loading || listingLoading}
              type='submit'
              variant='contained'
              sx={{ m: '0 !important', maxHeight: 40 }}
            >
              Go
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
