import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { Header } from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { useAppSelector } from './hooks';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './styles';

function App() {
  const { mode } = useAppSelector((state) => state.darkMode);

  const muiTheme = React.useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <ScrollToTop />
      <CssBaseline />
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
