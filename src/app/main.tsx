import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import router from 'app/router';
import { CONFIG } from './config';
import { store } from 'app/store';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.sass';
import { ThemeProvider } from 'widgets';

// axios
axios.defaults.baseURL = CONFIG.API_BASE_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Provider store={store}>
        <Container maxWidth="md">
          <RouterProvider router={router} />
        </Container>
      </Provider>
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
);
