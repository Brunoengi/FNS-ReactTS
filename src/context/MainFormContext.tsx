import { createContext, useState } from 'react'
import IFormValues from 'types/IFormValues'

interface InputContext {
  inputsValue: IFormValues,
  changeInputValue: (key: allInputsName, newValue: number) => void
}

export type allInputsName = 'b' | 'h' | 'd' | 'fck' | 'fyk' | 'E' | 'qsic' | 'qsis' | 'qsif' | 'serviceBendingMoment' | 'beta'

export const MainFormContext = createContext<InputContext>(
  {inputsValue: {b:'', h:'', d:'', fck:'', fyk:'', E:'', qsic:'', qsis:'', qsif:'', serviceBendingMoment:'', beta:''},
  changeInputValue(key, newValue) {
}})

export const MainFormProvider = ({children}: {children: any}) => {

  const [ inputsValue, setInputsValue ] = useState<IFormValues>({b:'', h:'', d:'', fck:'', fyk:'', E:'', qsic:'', qsis:'', qsif:'', serviceBendingMoment:'', beta:''})

  function changeInputValue(key: allInputsName, newValue: number) {
    setInputsValue(inputsValue => ({...inputsValue, [key]: newValue}))
  }

  return (
    <MainFormContext.Provider value={{
      inputsValue,
      changeInputValue
    }}>
      {children}
    </MainFormContext.Provider>
  )
}