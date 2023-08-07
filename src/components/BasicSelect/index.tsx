import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ISelect, {IdataValue} from 'types/ISelect';

export default function BasicSelect({dataset}: ISelect) {

  const [data, setData] = React.useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  return (
    <Box sx={{width: '15ch'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Age"
          onChange={handleChange}
        >
            {dataset.map((el: any) => (<MenuItem
              value={el}
            >
              {el}
            </MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}