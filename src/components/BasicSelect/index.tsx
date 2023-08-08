import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ISelect, {IdataValue} from 'types/ISelect';
import styles from './BasicSelect.module.scss'

export default function BasicSelect({dataset = [], labelSelect, context, endText = ''}: ISelect) {

  const [data, setData] = React.useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  return (
    <Box>
      <FormControl  sx={{ m: 1, width: '15ch' }} size='small'>
        <InputLabel 
          id="demo-simple-select-label"
        >
          {context}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label={labelSelect}
          onChange={handleChange}
          inputProps={{
            IconComponent: () => <div className={styles.endText}>{endText}</div>,
          }}
        >
            {dataset ? dataset.map((el: IdataValue['dataValue']) => (
              <MenuItem
                sx={{
                  textAlign: 'center'
                }}
                value={el}
              >
                {el}
              </MenuItem>)) : ''
            }
        </Select>
      </FormControl>
    </Box>
  );
}