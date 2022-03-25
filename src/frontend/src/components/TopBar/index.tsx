import { Stack } from '@mui/material';
import { DfinityBadge } from '../DfinityBadge';
import { DonateButton } from './DonateButton';
import { SocialButton } from './SocialButton';
import { ThemeButton } from './ThemeButton';
import { GithubButton } from './GithubButton';

export const TopBar = () => {
  return (
    <Stack display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
      <DfinityBadge />
      <Stack flexDirection='row' ml={2}>
        <DonateButton />
        <SocialButton />
        <GithubButton />
        <ThemeButton />
      </Stack>
    </Stack>
  );
};
