import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Custom styled component for the combined progress bar
const CombinedProgress = styled(Box)(({ theme, size, segment1, segment2, segment3 }) => ({
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
    backgroundColor: '#6FCF97', // Color for segment 1
  },
  '& .segment2': {
    width: `${segment2}%`,
    backgroundColor: '#F2C94C', // Color for segment 2
  },
  '& .segment3': {
    width: `${segment3}%`,
    backgroundColor: '#EB5757', // Color for segment 3
  },
}));

export default function CustomizedProgressBars({ size = 14}) {
    const segment1 = 20;
  const segment2 = 50;
  const segment3 = 30;
  return (
    <Box sx={{ width: '100%' }}>
      <CombinedProgress size={size} segment1={segment1} segment2={segment2} segment3={segment3}>
        <div className="segment1" />
        <div className="segment2" />
        <div className="segment3" />
      </CombinedProgress>
    </Box>
  );
}
