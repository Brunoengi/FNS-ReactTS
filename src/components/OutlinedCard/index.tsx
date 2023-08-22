import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icard from 'types/ICard'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const card = (title: string, children: React.ReactNode)  => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{color:'text.secondary', fontSize: 10, textAlign:'center' }} gutterBottom>
        {title}
      </Typography> 
      {children}
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({title, children}: Icard) {
  return (
    <Box sx={{display:'flex', justifyContent:'start' }}>
      <Card variant="outlined">{card(title, children)}</Card>
    </Box>
  );
}