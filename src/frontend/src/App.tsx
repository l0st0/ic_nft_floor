import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { Header } from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { useAppDispatch, useAppSelector } from './hooks';
import { createTheme } from '@mui/material';
import { getDesignTokens } from './styles';
import { backend } from '../../declarations/backend';
import { getPrice } from './store/price/priceSlice';
import { getListings } from './store/listing/listingSlice';

function App() {
  const { mode } = useAppSelector((state) => state.darkMode);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const get = async () => {
      try {
        await dispatch(getPrice());
        await dispatch(getListings());

        const stats = await backend.getStats();

        console.log('stats', stats);
      } catch (error) {
        console.log('error', error);
      }
    };

    get();
  }, []);

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
