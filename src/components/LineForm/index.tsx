import TextField from "@mui/material/TextField/TextField"
import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
import BasicPopover from "components/BasicPopover"
import styles from './LineForm.module.scss'
import ILineForm from "types/ILineForm"

export default function LineForm({labelText, id, width = '15ch', unit, labelPopOver = '?', textPopOver}: ILineForm) {
  return (
    <div className={styles.lineForm}>
      <TextField
        size='small'
        label={labelText}
        id={id}
        sx={{ m: 1, width: {width} }}
        InputProps={{
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
        }}
      />
      <BasicPopover
        label={labelPopOver}
        text={textPopOver}
      />
    </div>
  )
}

