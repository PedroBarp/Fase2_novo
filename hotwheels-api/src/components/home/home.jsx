import React from 'react';
import { Container, Grid, CardMedia, Typography } from '@mui/material';
import Lambo from '../../img/carro.png';

function PaginaInicial(props) {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <CardMedia component='img' height='270' image={Lambo} alt='Carro' />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>
            HOTWHEELS
          </Typography>
          <Typography variant='h6' align='left'>
            Bem-vindo ao CRUD de HotWheels!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaginaInicial;
