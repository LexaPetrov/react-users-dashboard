import React, { memo, useState, useEffect } from 'react';
import { addUser } from 'features/users/store/usersSlice';
import { EditModal } from 'shared/ui';
import { Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { User } from '../api/entities';
import { useAppDispatch } from 'entities/useAppDispatch';

type AddUserProps = {
  loading?: boolean;
};

const defaultValues = {
  name: '',
  email: '',
};

export const AddUser: React.FC<AddUserProps> = memo(({ loading = false }) => {
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
      <Button disabled={loading} onClick={() => setOpen(true)}  startIcon={<AddIcon />}>
        add user
      </Button>
      <EditModal open={open} handleClose={() => setOpen(false)} title={'Add new user'} confirmAction={onConfirm}>
        <Grid container maxWidth={'sm'} sx={{ my: 2 }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
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
