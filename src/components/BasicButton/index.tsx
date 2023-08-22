import Button from '@mui/material/Button';
import IBasicButton from 'types/components/IBasicButton';
import { MainFormContext } from 'context/MainFormContext';
import { useContext } from 'react';

export default function BasicButton({ text, variant, activeFunction }: IBasicButton) {

  const { inputsValue, changeInputValue } = useContext(MainFormContext)

  return (
      <Button 
      variant={variant}
      onClick={() => {activeFunction(inputsValue)}}
      >{text}</Button>
  );
}
