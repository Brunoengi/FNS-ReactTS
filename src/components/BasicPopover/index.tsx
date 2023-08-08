import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PopOver from 'types/IPopOver';
import Box from '@mui/material/Box';

export default function BasicPopover( {labelPopOver = '---', textPopOver, variant = 'outlined', size = 'medium'} : PopOver) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ '& button': { m: 0 } }}>
      <Button
        aria-describedby={id} 
        variant={variant} 
        onClick={handleClick} 
        size={size}
        >
        {labelPopOver}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1 }}>{textPopOver}</Typography>
      </Popover>
    </Box>
  );
}
