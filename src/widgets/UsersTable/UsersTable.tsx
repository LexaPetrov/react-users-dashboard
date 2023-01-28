import React, { memo, ReactElement, useEffect, useState } from 'react';
import { usersListSelector } from 'features/users/store/usersSlice';
import { useSelector } from 'react-redux';
import { Table } from 'shared/ui';
import { DeleteUser, AddUser, EditUser } from 'features';
import { Button, Stack } from '@mui/material';

type UsersTableProps = unknown;

export const UsersTable: React.FC<UsersTableProps> = memo(() => {
  const [rows, setRows] = useState<Data[]>([]);
  const { list, loading } = useSelector(usersListSelector);

  const headCells = [
    {
      id: 'id',
      disablePadding: false,
      label: 'id',
    },
    {
      id: 'name',
      disablePadding: false,
      label: 'name',
    },
    {
      id: 'username',
      disablePadding: false,
      label: 'username',
    },
    {
      id: 'email',
      disablePadding: false,
      label: 'email',
    },
    {
      id: 'city',
      disablePadding: false,
      label: 'city',
    },
    {
      id: 'actions',
      disablePadding: false,
      label: '',
    },
  ];

  interface Data {
    id: number;
    name: string;
    username: string;
    email: string;
    city: string;
    actions: ReactElement;
  }

  function createData(id: number, name: string, username: string, email: string, city: string): Data {
    return {
      id,
      name,
      username,
      email,
      city,
      actions: (
        <Stack direction={'row'} spacing={1}>
          <EditUser id={id} />
          <DeleteUser id={id} />
        </Stack>
      ),
    };
  }

  useEffect(() => {
    if (list) {
      const _rows: Data[] = [];
      list.forEach(({ id, name, username, email, address }) => {
        _rows.push(createData(id, name, username as string, email, address?.city ?? ''));
      });
      setRows(_rows);
    }
  }, [list]);

  return (
    <>
      <Button
        onClick={() => {
          localStorage.removeItem('users');
          window.location.reload();
        }}
        variant="outlined"
        sx={{ my: 1 }}
        disabled={loading}
      >
        clear localStorage and refresh page
      </Button>
      <Table
        orderByColumn="username"
        rows={rows as Data[] & Array<{ [key: string]: string }>}
        title="Users table"
        headCells={headCells}
        AddButton={<AddUser loading={loading} />}
      />
    </>
  );
});
