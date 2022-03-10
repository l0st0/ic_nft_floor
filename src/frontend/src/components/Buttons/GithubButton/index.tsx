import { GitHub } from '@mui/icons-material';
import { IconButton, Link } from '@mui/material';

export const GithubButton = () => {
  return (
    <Link component={IconButton} href='https://github.com/l0st0/ic_nft_floor' rel='noreferrer' target='_blank'>
      <GitHub />
    </Link>
  );
};
