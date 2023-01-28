import React, { memo } from 'react';
import { Link, Typography } from '@mui/material';
import { USERS_PAGE_ROUTE } from 'router/routes';
import { useNavigate } from 'react-router-dom';

type MainPageProps = unknown;

const MainPage: React.FC<MainPageProps> = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h2">Main page</Typography>
      <Link onClick={() => navigate(USERS_PAGE_ROUTE)}>go to users page</Link>
    </>
  );
});

export default MainPage;
