import React, { memo, useEffect, useState } from 'react';
import { getUserById, loadingSelector, updateUser } from 'api/users/usersSlice';
import { useAppDispatch } from 'hooks';
import { EditModal } from 'components';
import { Button, Grid, Grow, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { User } from 'api/users/entities';
import { useSelector } from 'react-redux';

type EditUserProps = {
  id: number;
};

const defaultValues = {
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
};

const EditUser: React.FC<EditUserProps> = memo(({ id }) => {
  const loading = useSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    defaultValues,
  });
  const [open, setOpen] = useState(false);

  const onConfirm = handleSubmit((fields) => {
    dispatch(updateUser({ ...fields }));
    setOpen(false);
  });

  useEffect(() => {
    if (open) {
      dispatch(getUserById(id))
        .unwrap()
        .then((res) => reset(res));
    } else {
      reset(defaultValues);
    }
  }, [open, id]);

  return (
    <>
      <Button sx={{ minWidth: 'auto' }} disabled={loading} onClick={() => setOpen(true)}>
        edit
      </Button>
      <EditModal open={open} handleClose={() => setOpen(false)} title={'Edit user'} confirmAction={onConfirm}>
        <Grow in={!loading} style={{ transformOrigin: '0 0 0' }} {...(!loading ? { timeout: 500 } : {})}>
          <Grid
            container
            maxWidth={'md'}
            sx={{ padding: '10px' }}
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="name"
                label="name"
                color="primary"
                variant="outlined"
                {...register('name', {
                  required: 'This field is required',
                  maxLength: 40,
                })}
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="username"
                label="username"
                color="primary"
                variant="outlined"
                {...register('username', {
                  maxLength: 20,
                })}
                error={!!errors?.username}
                helperText={errors?.username?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="phone"
                label="phone"
                color="primary"
                variant="outlined"
                {...register('phone', {
                  maxLength: 20,
                })}
                error={!!errors?.phone}
                helperText={errors?.phone?.message}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                focused
                fullWidth
                placeholder="website"
                label="website"
                color="primary"
                variant="outlined"
                {...register('website', {
                  maxLength: 20,
                })}
                error={!!errors?.website}
                helperText={errors?.website?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="city"
                label="city"
                color="primary"
                variant="outlined"
                {...register('address.city', {
                  maxLength: 20,
                })}
                error={!!errors?.address?.city}
                helperText={errors?.address?.city?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="zipcode"
                label="zipcode"
                color="primary"
                variant="outlined"
                {...register('address.zipcode', {
                  maxLength: 10,
                })}
                error={!!errors?.address?.zipcode}
                helperText={errors?.address?.zipcode?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="street"
                label="street"
                color="primary"
                variant="outlined"
                {...register('address.street', {
                  maxLength: 20,
                })}
                error={!!errors?.address?.street}
                helperText={errors?.address?.street?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="suite"
                label="suite"
                color="primary"
                variant="outlined"
                {...register('address.suite', {
                  maxLength: 20,
                })}
                error={!!errors?.address?.suite}
                helperText={errors?.address?.suite?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="lat"
                label="lat"
                color="primary"
                variant="outlined"
                {...register('address.geo.lat', {
                  maxLength: 20,
                })}
                error={!!errors?.address?.geo?.lat}
                helperText={errors?.address?.geo?.lat?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="lng"
                label="lng"
                color="primary"
                variant="outlined"
                {...register('address.geo.lng', {
                  maxLength: 20,
                })}
                error={!!errors?.address?.geo?.lng}
                helperText={errors?.address?.geo?.lng?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="company name"
                label="company name"
                color="primary"
                variant="outlined"
                {...register('company.name', {
                  maxLength: 20,
                })}
                error={!!errors?.company?.name}
                helperText={errors?.company?.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                focused
                fullWidth
                placeholder="bs"
                label="bs"
                color="primary"
                variant="outlined"
                {...register('company.bs')}
                error={!!errors?.company?.bs}
                helperText={errors?.company?.bs?.message}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                focused
                fullWidth
                placeholder="catchphrase"
                label="catchphrase"
                color="primary"
                variant="outlined"
                {...register('company.catchPhrase')}
                error={!!errors?.company?.catchPhrase}
                helperText={errors?.company?.catchPhrase?.message}
              />
            </Grid>
          </Grid>
        </Grow>
      </EditModal>
    </>
  );
});

export default EditUser;
