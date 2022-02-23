import React from 'react';
import { IconButton, Menu, ToggleButton } from '@mui/material';

import Brightness6Icon from '@mui/icons-material/Brightness6';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { StyledToggleButtonGroup } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ModeType } from '../../types';
import { changeTheme } from '../../store/darkMode/dakrModeSlice';

export const ThemeButton = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.darkMode);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onModeChange = (theme: ModeType) => {
    dispatch(changeTheme(theme));
    handleClose();
  };

  return (
    <>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
        <Brightness6Icon />
      </IconButton>

      <Menu
        id='mode-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
          disablePadding: true,
        }}
        disableScrollLock={true}
      >
        <StyledToggleButtonGroup orientation='vertical' value={theme} exclusive>
          <ToggleButton onClick={() => onModeChange('system')} size='small' value='system' aria-label='list'>
            <SettingsIcon fontSize='small' sx={{ mr: 1 }} />
            <span>System</span>
          </ToggleButton>
          <ToggleButton onClick={() => onModeChange('dark')} size='small' value='dark' aria-label='module'>
            <NightlightRoundIcon fontSize='small' sx={{ mr: 1 }} />
            <span>Dark</span>
          </ToggleButton>
          <ToggleButton onClick={() => onModeChange('light')} size='small' value='light' aria-label='quilt'>
            <WbSunnyIcon fontSize='small' sx={{ mr: 1 }} />
            <span>Light</span>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Menu>
    </>
  );
};
