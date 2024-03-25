import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function PagSobre() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Sobre
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant='h6' gutterBottom>
          Esta é uma aplicação para um CRUD de carros HotWheels.
        </Typography>
        <Typography variant='h6' gutterBottom>
          Elaborada na Disciplina Desenvolvimento de Sistema Frontend
        </Typography>
        <Typography variant='h6' gutterBottom>
          Do curso de Graduação Online da PUCRS
        </Typography>
      </Box>
    </Container>
  );
}

export default PagSobre;
