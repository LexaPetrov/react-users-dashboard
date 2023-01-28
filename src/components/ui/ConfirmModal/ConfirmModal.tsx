import { Modal, Box, Typography, Button } from '@mui/material';
import React, { memo } from 'react';

type ConfirmModalProps = {
  open: boolean;
  title: string;
  text: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  handleClose: () => void;
  confirmAction: (...args: unknown[]) => void;
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

export const ConfirmModal: React.FC<ConfirmModalProps> = memo(
  ({ open, handleClose, title, text, confirmAction, confirmButtonText = 'Yes', cancelButtonText = 'Cancel' }) => {
    return (
      <Modal
        open={open}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            {text}
          </Typography>
          <Button onClick={confirmAction}>{confirmButtonText}</Button>
          <Button onClick={handleClose}>{cancelButtonText}</Button>
        </Box>
      </Modal>
    );
  },
);
