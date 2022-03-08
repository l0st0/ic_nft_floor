import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { Search } from './components/Search';
import ScrollToTop from './components/ScrollToTop';
import { useAppSelector } from './hooks';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './styles';
import { TopBar } from './components/TopBar';

function App() {
  const { mode } = useAppSelector((state) => state.common);
  const { stats } = useAppSelector((state) => state.data);

  console.log('stats', stats);

  const muiTheme = React.useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <ScrollToTop />
      <CssBaseline />
      <TopBar />
      <Search />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
