import React, { memo, useEffect } from 'react';
import { Typography } from '@mui/material';
import UsersTable from './components/UsersTable/UsersTable';
import { getUsers } from 'api/users/usersSlice';
import { useAppDispatch } from 'hooks';

type UsersPageProps = unknown;

const UsersPage: React.FC<UsersPageProps> = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Typography variant="h2">Dashboard</Typography>
      <UsersTable />
    </>
  );
});

export default UsersPage;
