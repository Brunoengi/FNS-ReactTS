import { createContext, useState } from 'react'

export type allInputsName = 'b' | 'h' | 'd' | 'fck' | 'fyk' | 'E' | 'qsic' | 'qsis' | 'qsif' | 'serviceBendingMoment' | 'beta'

interface InputContext {
  inputsValue: Record<allInputsName, number | string>,
  changeInputValue: (key: allInputsName, newValue: number) => void
}

export const MainFormContext = createContext<InputContext>(
  {inputsValue: {b:'', h:'', d:'', fck:'', fyk:'', E:'', qsic:'', qsis:'', qsif:'', serviceBendingMoment:'', beta:''},
  changeInputValue(key, newValue) {},
})

export const MainFormProvider = ({children}: {children: any}) => {

  const [ inputsValue, setInputsValue ] = useState<InputContext['inputsValue']>({b:'', h:'', d:'', fck:'', fyk:'', E:'', qsic:'', qsis:'', qsif:'', serviceBendingMoment:'', beta:''})

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