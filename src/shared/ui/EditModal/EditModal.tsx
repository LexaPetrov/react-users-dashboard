import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import React, { memo, ReactElement } from 'react';

type EditModalProps = {
  open: boolean;
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  children?: ReactElement;
  handleClose: () => void;
  confirmAction: () => void;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '100%',
  maxHeight: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

export const EditModal: React.FC<EditModalProps> = memo(
  ({ open, handleClose, title, confirmAction, confirmButtonText = 'Save', cancelButtonText = 'Cancel', children }) => {
    return (
      <Modal
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={confirmAction}>
              {confirmButtonText}
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              {cancelButtonText}
            </Button>
          </Stack>
        </Box>
      </Modal>
    );
  },
);
