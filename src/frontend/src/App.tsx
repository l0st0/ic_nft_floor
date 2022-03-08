import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import ScrollToTop from './components/ScrollToTop';
import { useAppSelector } from './hooks';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './styles';

function App() {
  const { mode } = useAppSelector((state) => state.common);

  const muiTheme = React.useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <ScrollToTop />
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
