import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { Header } from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { useAppDispatch, useAppSelector } from './hooks';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './styles';
import { getPrice } from './store/price/priceSlice';
import { getListings } from './store/listing/listingSlice';
import { getStats } from './store/stats/statsSlice';

function App() {
  const { mode } = useAppSelector((state) => state.common);

  const dispatch = useAppDispatch();
  const { stats } = useAppSelector((state) => state.stats);

  React.useEffect(() => {
    const get = async () => {
      try {
        dispatch(getPrice());
        await dispatch(getListings());
        await dispatch(getStats());
      } catch (error) {
        console.log('error', error);
      }
    };

    get();
  }, []);

  console.log('stats', stats);

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
