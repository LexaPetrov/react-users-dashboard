import { createBrowserRouter } from 'react-router-dom';
import { MAIN_PAGE_ROUTE, USERS_PAGE_ROUTE } from './routes';
import MainPage from 'pages/Main/Main';
import UsersPage from 'pages/Users/Users';

const router = createBrowserRouter([
  {
    path: MAIN_PAGE_ROUTE,
    element: <MainPage />,
  },
  {
    path: USERS_PAGE_ROUTE,
    element: <UsersPage />,
  },
]);

export default router;
