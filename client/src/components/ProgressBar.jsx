import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Custom styled component for the combined progress bar
const SingleProgress = styled(Box)(({ theme, size, segment1, segment2, segment3 }) => ({
  height: size,
  width: '100%',
  borderRadius: 5,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  display: 'flex',
  overflow: 'hidden',
  '& div': {
    height: '100%',
  },
  '& .segment1': {
    width: `${segment1}%`,
    backgroundColor: '#FF9500', // Color for segment 1
  }
}));

export default function ProgressBar({ size = 10}) {
    const segment1 = 60;
  return (
    <Box sx={{ width: '100%' }}>
      <SingleProgress size={size} segment1={segment1} >
        <div className="segment1" />
      </SingleProgress>
    </Box>
  );
}
