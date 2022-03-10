import { Stack } from '@mui/material';
import React from 'react';
import { DfinityBadge } from '../DfinityBadge';
import { DonateButton } from '../Buttons/DonateButton';
import { SocialButton } from '../Buttons/SocialButton';
import { ThemeButton } from '../Buttons/ThemeButton';

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
