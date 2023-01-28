import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from 'router';
import { CONFIG } from 'api';
import { store } from 'store';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.sass';
import { Container } from '@mui/material';

// react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  },
});

// axios
axios.defaults.baseURL = CONFIG.API_BASE_URL;

//theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Provider store={store}>
          <Container maxWidth="md">
            <RouterProvider router={router} />
          </Container>
        </Provider>
      </ThemeProvider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
);
