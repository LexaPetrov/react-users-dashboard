import { CircularProgress, Box } from '@mui/material';
import React, { memo } from 'react';

type LoaderProps = unknown;

export const Loader: React.FC<LoaderProps> = memo(() => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        backdropFilter: 'blur(5px)',
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
});
