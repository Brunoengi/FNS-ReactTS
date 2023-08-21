import Button from '@mui/material/Button';
import IBasicButton from 'types/IBasicButton';
import { MainFormContext } from 'context/MainFormContext';
import { useContext } from 'react';
import dimension from 'scripts/main';

export default function BasicButton({ text, variant }: IBasicButton) {

  const { inputsValue, changeInputValue } = useContext(MainFormContext)

  return (
      <Button 
      variant={variant}
      onClick={() => {
        console.log(inputsValue)
        dimension(inputsValue)}}
      >{text}</Button>
  );
}
