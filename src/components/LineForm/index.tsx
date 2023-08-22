import TextField from "@mui/material/TextField/TextField"
import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
import BasicPopover from "components/BasicPopover"
import styles from './LineForm.module.scss'
import ILineForm from "types/components/ILineForm"
import BasicSelect from "components/BasicSelect"
import { useContext } from "react"
import { MainFormContext } from "context/MainFormContext"


export default function LineForm({ labelText = '', id, width = '15ch', unit, labelPopOver = '?', textPopOver, type = 'input', dataset = [], context, labelSelect, endText }: ILineForm) {

  const { inputsValue, changeInputValue } = useContext(MainFormContext)

  const typeLine = {
    input: (<TextField
      size='small'
      label={labelText}
      id={id}
      sx={{ m: 1, width: { width } }}
      onChange={(e) => changeInputValue(id, Number(e.target.value))}
      InputProps={{
        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
      }}
    />),
    select: (<BasicSelect
      dataset={dataset}
      context={context}
      labelSelect={labelSelect}
      endText={endText}
      id={id}
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
