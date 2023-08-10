import Button from '@mui/material/Button';
import IBasicButton from 'types/IBasicButton';

export default function BasicButton({ text, variant }: IBasicButton) {
  return (
      <Button variant={variant}>{text}</Button>
  );
}
