import React from 'react';
import { Stack, TextField } from '@mui/material';
import useComponentSize from '@rehooks/component-size';
import { ThemeButton } from '../ThemeButton';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Controller, useForm } from 'react-hook-form';
import { DfinityBadge } from '../DfinityBadge';
import { StyledMainHeading } from './styles';
import { SocialButton } from '../SocialButton';
import { getCollections, revalidateCollections } from '../../store/collection/collectionSlice';
import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { ResetButtons } from '../ResetButtons';

interface Form {
  principal: string;
}

export const Header = () => {
  const dispatch = useAppDispatch();
  const { loading, collections, validating } = useAppSelector((state) => state.collection);
  const { fetchingError } = useAppSelector((state) => state.common);

  const headingRef = React.useRef(null);
  const { width } = useComponentSize(headingRef);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = async ({ principal }: Form) => {
    await dispatch(getCollections({ principal }));
    // await dispatch(revalidateCollections({ principal }));
  };

  return (
    <>
      <Stack display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
        <DfinityBadge />
        <Stack flexDirection='row'>
          <SocialButton />
          <ThemeButton />
        </Stack>
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
                  autoFocus
                  fullWidth
                  disabled={loading || fetchingError || validating}
                  id='principalInput'
                  placeholder='Enter your principal'
                  variant='outlined'
                  error={!!errors.principal}
                  helperText={!!errors.principal && 'Enter valid principal.'}
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

            <LoadingButton
              loading={loading}
              disabled={loading || fetchingError || validating}
              type='submit'
              variant='contained'
              sx={{ m: '0 !important', maxHeight: 40, minWidth: 0 }}
            >
              <Send />
            </LoadingButton>
          </Stack>
        </Stack>

        {collections.length ? (
          <Stack width={width} mt={1} flexDirection='row' flexWrap='wrap'>
            <ResetButtons />
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};
