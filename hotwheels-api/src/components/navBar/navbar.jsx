import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

function NavBar() {
  return (
    <AppBar sx={{ backgroundColor: 'blue' }}>
      <Toolbar>
        <Typography variant='img' to='/' component={Link} sx={{ flexGrow: 1 }}>
          <img
            src={Logo}
            alt='Logo'
            style={{ marginRight: '10px', height: '50px' }}
          />
        </Typography>
        <Button component={Link} to='/sobre' color='inherit'>
          Sobre
        </Button>
        <Button component={Link} to='/carros' color='inherit'>
          Listar Carro
        </Button>
        <Button component={Link} to='/addCarro' color='inherit'>
          Adicionar Carro
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
