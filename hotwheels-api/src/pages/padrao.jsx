import React from 'react';
import { Container, Typography } from '@mui/material';

function RotaPadrao() {
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
      <Typography variant='h2' gutterBottom>
        Ops... Pagina não encontrada
      </Typography>
    </Container>
  );
}

export default RotaPadrao;
