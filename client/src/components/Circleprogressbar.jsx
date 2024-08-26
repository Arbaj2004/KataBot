import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';

export default function CircularDeterminate({ percentage }) {
  const [progress, setProgress] = React.useState(0);
  let colors = "#000"

  React.useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <>
   <style>
        {`
          @media (max-width: 1200px) {
            .MuiCircularProgress-root {
              width: 130px !important;
              height: 130px !important;
            }
          }
        `}
      </style>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={60} size={160} thickness={5}
            sx={{
                position: "absolute",
                zIndex: 999,
            }}
        />
        <CircularProgress  variant="determinate" value={100} size={160} thickness={5} sx={{
            color: '#E0E0E0',
          }} />

        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
        >
          <Typography variant="caption" component="div" color="textSecondary" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {`${Math.round(60)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
    </>
  );
}
