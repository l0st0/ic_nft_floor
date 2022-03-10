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
      xs: 0,
      sm: 300,
      md: 644,
      lg: 900,
      xl: 1200,
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
