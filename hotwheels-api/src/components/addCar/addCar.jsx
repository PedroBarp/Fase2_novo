import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

function AddCar(props) {
  return (
    <Container sx={{ width: '100%', margin: 'auto', mt: 15 }}>
      <Box
        sx={{
          marginTop: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant='h4' gutterBottom>
          Adicionar Carro
        </Typography>
        <TextField
          fullWidth
          label='Nome do Carro'
          name='name'
          value={props.name}
          onChange={props.handleInputChange}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Marca do Carro'
          name='brand'
          value={props.brand}
          onChange={props.handleInputChange}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Cor do Carro'
          name='color'
          value={props.color}
          onChange={props.handleInputChange}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Ano do Carro'
          name='year'
          value={props.year}
          onChange={props.handleInputChange}
          type='number'
          margin='normal'
          inputProps={{ min: '1886', max: props.anoAtual }}
        />
        <Button
          variant='contained'
          color='primary'
          disabled={props.checkDados}
          onClick={props.handleSaveClick}
          sx={{ margin: 2 }}
        >
          Adicionar Carro
        </Button>
      </Box>
    </Container>
  );
}

export default AddCar;
