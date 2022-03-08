import { Stack } from '@mui/material';
import React from 'react';
import { DfinityBadge } from '../DfinityBadge';
import { DonateButton } from '../DonateButton';
import { SocialButton } from '../SocialButton';
import { ThemeButton } from '../ThemeButton';

export const TopBar = () => {
  return (
    <Stack display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
      <DfinityBadge />
      <Stack flexDirection='row' ml={2}>
        <DonateButton />
        <SocialButton />
        <ThemeButton />
      </Stack>
    </Stack>
  );
};
