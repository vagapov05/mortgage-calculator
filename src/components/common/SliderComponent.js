import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


const SliderComponent = ({defaultValue, min, max, step, onChange, value, label, unit, amount}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>

      <Slider onChange={onChange} 
              value={value}
              defaultValue={defaultValue} 
              min={min} 
              max={max} 
              step={step} 
              aria-label="Default" 
              valueLabelDisplay="auto" 
              marks />

      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.secondary'>{unit} {min}</Typography>
        <Typography variant='caption' color='text.secondary'>{unit} {max}</Typography>
      </Stack>
    </Stack>
  )
}

export default SliderComponent;
