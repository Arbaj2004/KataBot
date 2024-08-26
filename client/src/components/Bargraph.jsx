import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StackBars() {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5, 2], stack: 'A', label: 'Legend 1', color: '#7267F0' },
        { data: [4, 3, 1, 5, 8, 6], stack: 'A', label: 'Legend 2', color: '#B3ACF2' },
      ]}
      width={900}
      height={350}
      borderRadius={10}
      // margin={{ top: 40, right: 40, bottom: 40, left: -85 }} // Adjust the left margin here
    />
  );
}
