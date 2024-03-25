import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

function EditaCarro(props) {
  return (
    <Container
      sx={{
        alignItems: 'center',
        height: '100vh',
        width: '100wh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
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
          onClick={() => props.handleSaveCarro(props.car)}
          sx={{ marginTop: 3 }}
        >
          Adicionar Carro
        </Button>
      </Box>
    </Container>
  );
}

export default EditaCarro;
