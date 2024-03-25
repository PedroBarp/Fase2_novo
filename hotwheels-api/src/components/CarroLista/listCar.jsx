import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Container,
  Typography,
  Stack,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  List,
} from '@mui/material';
import { Link } from 'react-router-dom';

function ListCar(props) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        alignItems: 'center',
        textAlign: 'center',
        mt: 15,
      }}
    >
      <Typography variant='h4' gutterBottom>
        Lista de Carros
      </Typography>
      <List sx={{ width: '100%' }}>
        {props.data.map((carro) => (
          <ListItem
            sx={{
              backgroundColor: 'rgb(236, 232, 232)',
              margin: '10px',
              borderRadius: 1,
            }}
            key={carro.id}
          >
            <ListItemAvatar>
              <Avatar src='/user.png' />
            </ListItemAvatar>
            <ListItemText
              primary={`${carro.id} : ${carro.name} - ${carro.brand} || ${carro.color} - ${carro.year}`}
            />
            <Stack direction='row' spacing={2}>
              <Button
                variant='outlined'
                component={Link}
                startIcon={<DeleteIcon />}
                onClick={() => props.handleDelete(carro.id)}
                color='error'
                data-testid="exclui-button"
              >
                Excluir
              </Button>
              <Button
                variant='contained'
                component={Link}
                to={`/editar/${carro.id}`}
                color='secondary'
                data-testid="edit-button"
              >
                Editar
              </Button>
            </Stack>
          </ListItem>
        ))}
      </List>
      <Button variant='contained' component={Link} to='/addCarro'>
        Adicionar Carro
      </Button>
    </Container>
  );
}

export default ListCar;
