import { createContext, useState } from 'react'
import IFormValues from 'types/IFormValues'

interface InputContext {
  inputsValue: IFormValues,
  setInputsValue: React.Dispatch<React.SetStateAction<IFormValues>>
}

type allInputsName = 'b' | 'h' | 'd' | 'fck' | 'fyk' | 'E' | 'qsic' | 'qsis' | 'qsif' | 'serviceBendingMoment' | 'beta'

export const MainFormContext = createContext<InputContext| null>(null)

export const MainFormProvider = ({children}: {children: any}) => {

  const [ inputsValue, setInputsValue ] = useState<IFormValues>({
    b: '',
    h: '',
    d: '',
    fck: '',
    fyk: '',
    E: '',
    qsic: '',
    qsis: '', 
    qsif: '',
    serviceBendingMoment: '',
    beta: '',
  })

  function changeInputValue(key: allInputsName, newValue: string) {
    setInputsValue(inputsValue => ({...inputsValue, [key]: newValue}))
  }

  return (
    <MainFormContext.Provider value={{
      inputsValue,
      setInputsValue
    }}>
      {children}
    </MainFormContext.Provider>
  )
}