import React, { memo } from 'react';
import { Button, Typography } from '@mui/material';
import { USERS_PAGE_ROUTE } from 'app/router/routes';
import { useNavigate } from 'react-router-dom';

type MainPageProps = unknown;

const MainPage: React.FC<MainPageProps> = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h2">Main page</Typography>
      <Button variant="outlined" sx={{ my: 1 }} onClick={() => navigate(USERS_PAGE_ROUTE)}>
        go to users dashboard
      </Button>
    </>
  );
});

export default MainPage;
