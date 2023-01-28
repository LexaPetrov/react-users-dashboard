import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks';
import React, { memo, useCallback, useState } from 'react';
import { deleteUser, loadingSelector } from 'api/users/usersSlice';
import { ConfirmModal } from 'components';
import { Button } from '@mui/material';

type DeleteUserProps = {
  id: number;
};

const DeleteUser: React.FC<DeleteUserProps> = memo(({ id }) => {
  const loading = useSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const onConfirm = useCallback(() => {
    dispatch(deleteUser(id));
    setOpen(false);
  }, [id]);

  return (
    <>
      <Button disabled={loading} onClick={() => setOpen(true)}>
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

export default DeleteUser;
