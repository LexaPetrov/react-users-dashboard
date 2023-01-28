import React, { memo, useEffect } from 'react';
import { Typography } from '@mui/material';
import UsersTable from '../../widgets/UsersTable/UsersTable';
import { getUsers } from 'features/users/store/usersSlice';
import { useAppDispatch } from 'entities/useAppDispatch';

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
