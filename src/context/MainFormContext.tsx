import { createContext, useState } from 'react'
import IFormValues from 'types/IFormValues'

export const MainFormContext = createContext<IFormValues | null>(null)

export const MainFormProvider = ({children}: {children: any}) => {

  const [ inputValue, setInputValue ] = useState<IFormValues>({
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

  return (
    <MainFormContext.Provider value={inputValue}>
      {children}
    </MainFormContext.Provider>
  )
}