import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAutocompleteTextField = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-input': {
    textAlign: 'center',
    fontSize: '20px',
  },

  fieldset: {
    borderColor: theme.palette.mode === 'dark' ? 'white !important' : 'black !important',
  },
}));

export const StyledMainHeading = styled(Typography)(({ theme }) => ({}));
