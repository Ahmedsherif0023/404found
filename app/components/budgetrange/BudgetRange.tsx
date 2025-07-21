import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './BudgetRange.css';

function valuetext(value: number) {
  return `$${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([100, 1000]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 800 }}>
      <Slider
        getAriaLabel={() => 'Budget range'}
        value={value}
        min={100}
        max={1000}
        step={50}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
        <Box sx={{ mt: 2 }}>
            <span className='budget-valuee'>Budget: ${value[0]} - ${value[1]}</span>
        </Box>
    </Box>
  );
}