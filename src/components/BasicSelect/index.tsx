import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ISelect, { IdataValue } from 'types/ISelect';
import styles from './BasicSelect.module.scss'
import { useContext } from 'react';
import { MainFormContext } from 'context/MainFormContext';

export default function BasicSelect({ dataset = [], labelSelect, context, endText = '', id }: ISelect) {

  const { inputsValue, changeInputValue } = useContext(MainFormContext)

  console.log(dataset)
  return (
    <Box>
      <FormControl sx={{ m: 1, width: '20ch' }} size='small'>
        <InputLabel>
          {context}
        </InputLabel>
        <Select
          id={id}
          label={labelSelect}
          onChange={(e) => changeInputValue(id, Number(e.target.value))}
          inputProps={{
            IconComponent: () => <div className={styles.endText}>{endText}</div>,
          }}
        >
          {dataset.map((element) => (
            typeof element === 'number' ? <MenuItem value={element}>{element}</MenuItem> : <MenuItem value={element.value}>{element.textLabel}</MenuItem>
            
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

