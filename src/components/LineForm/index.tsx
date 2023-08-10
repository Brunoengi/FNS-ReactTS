import TextField from "@mui/material/TextField/TextField"
import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
import BasicPopover from "components/BasicPopover"
import styles from './LineForm.module.scss'
import ILineForm from "types/ILineForm"
import BasicSelect from "components/BasicSelect"


export default function LineForm({ labelText = '', id = '', width = '15ch', unit, labelPopOver = '?', textPopOver, type = 'input', dataset = [], context, labelSelect, endText }: ILineForm) {

  const typeLine = {
    input: (<TextField
      size='small'
      label={labelText}
      id={id}
      sx={{ m: 1, width: { width } }}
      InputProps={{
        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
      }}
    />),
    select: (<BasicSelect
      dataset={dataset}
      context={context}
      labelSelect={labelSelect}
      endText={endText}
    />)
  }


  return (
    <div className={styles.lineForm}>
      {typeLine[type]}
      <BasicPopover
        labelPopOver={labelPopOver}
        textPopOver={textPopOver}
      />
    </div>
  )
}
