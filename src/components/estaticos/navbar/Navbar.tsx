import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import './Navbar.css'
import useLocalStorage from "react-use-localstorage";

function Navbar() {

    const [token, setToken] = useLocalStorage('token');

    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        navigate('/login')
    }

  return (
    <>
      <AppBar position="static">
                <Toolbar variant="dense"  className="navbar-cor">
                    <Box className='cursor'>
                    <Link to='/home' className='textos bold-navbar'>
                        <Typography variant="h5" color="inherit">
                            <img className='img-logo' src="https://i.pinimg.com/originals/7b/0c/e0/7b0ce0e9e5938afc0b3fb4e0ea64e6c0.png" alt="" />
                        </Typography>
                    </Link>    
                    </Box>
                    
                    {/* A Grid em volta da Box permite a utlização do espaço inteiro disponível e joga os itens para a direita */}
                   <Grid container justifyContent="flex-end">
                   <Box display="flex" justifyContent="flex-end">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className='text-decorator-none'>   
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                Temas
                            </Typography>
                        </Box>
                    </Link> 
                    <Link to='formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                        
                            <Box mx={1} className='cursor text-decorator-none' onClick={goLogout}>
                                <Typography variant="h6" color="inherit" >
                                   <Button className='btn-logout' variant='contained'>Logout</Button> 
                                </Typography>
                            </Box>
                    </Box>
                   </Grid>

                </Toolbar>
            </AppBar>
    </>
  );
}

export default Navbar;
