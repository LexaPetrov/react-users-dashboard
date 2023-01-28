import { useSelector } from 'react-redux';
import React, { memo, useCallback, useState } from 'react';
import { deleteUser, loadingSelector } from 'features/users/store/usersSlice';
import { ConfirmModal } from 'shared/ui';
import { Button } from '@mui/material';
import { useAppDispatch } from 'entities/useAppDispatch';

type DeleteUserProps = {
  id: number;
};

export const DeleteUser: React.FC<DeleteUserProps> = memo(({ id }) => {
  const loading = useSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const onConfirm = useCallback(() => {
    dispatch(deleteUser(id));
    setOpen(false);
  }, [id]);

  return (
    <>
      <Button disabled={loading} color="error" onClick={() => setOpen(true)}>
        delete
      </Button>
      <ConfirmModal
        open={open}
        handleClose={() => setOpen(false)}
        title={'Delete user'}
        text={'Are you sure to delete user with id = ' + id + '?'}
        confirmAction={onConfirm}
      />
    </>
  );
});
