import { PaletteMode } from '@mui/material';
import darkScrollbar from '@mui/material/darkScrollbar';
import { blueGrey } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: blueGrey,
    secondary: blueGrey,
    ...(mode === 'light' ? {} : {}),
  },

  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },

  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...(mode === 'dark' ? darkScrollbar() : ''),
          maxWidth: 1536,
          margin: '0 auto',
          padding: '8px 24px',
        },
      },
    },
  },
});
