import React, { memo, useState, useEffect } from 'react';
import { addUser } from 'api/users/usersSlice';
import { useAppDispatch } from 'hooks';
import { EditModal } from 'components';
import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { User } from 'api/users/entities';

type AddUserProps = {
  loading?: boolean;
};

const defaultValues = {
  name: '',
  email: '',
};

const AddUser: React.FC<AddUserProps> = memo(({ loading = false }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues,
  });
  const [open, setOpen] = useState(false);

  const onConfirm = handleSubmit((fields) => {
    dispatch(addUser({ ...fields }));
    setOpen(false);
  });

  useEffect(() => {
    if (!open) reset(defaultValues);
  }, [open]);

  return (
    <>
      <Button disabled={loading} onClick={() => setOpen(true)}>
        add user
      </Button>
      <EditModal open={open} handleClose={() => setOpen(false)} title={'Add new user'} confirmAction={onConfirm}>
        <Grid container maxWidth={'sm'} sx={{ padding: '10px' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12} sm={12}>
            <TextField
              focused
              fullWidth
              placeholder="name"
              label="name"
              color="primary"
              variant="outlined"
              {...register('name', {
                required: 'This field is required',
              })}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              focused
              fullWidth
              placeholder="email"
              label="email"
              color="primary"
              variant="outlined"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          </Grid>
        </Grid>
      </EditModal>
    </>
  );
});

export default AddUser;

/* 
const form = useForm({
    defaultValues: {
      id: '',
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
  });
*/
