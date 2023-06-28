import * as React from 'react';
import {useRouter} from 'next/router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { GlobalState } from './Layout';


export default function OuterNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const pages = ['Tasks', 'Appointments', 'Finances', 'News', 'Weather', 'Calendar']

    const router = useRouter();

    const globalState = React.useContext(GlobalState)
    console.log(globalState.state)

    React.useEffect(() => {
    fetch('/api/check_session')
    .then(r => {
        if (r.ok){
            r.json()
            .then((data) => {
                if(!data.message){
                    globalState.dispatch({type: 'LOGIN', payload: data})
                }
                else {
                    console.log(data)
                }
            })
        }
        else {
            r.json().then(data => console.log(data))
        }
    })
    }, [])

    function logOut(){
        handleCloseUserMenu()
        fetch('/api/logout', {
            method: 'DELETE'
        })
        .then(data => globalState.dispatch({ type: 'LOGOUT', payload: data}))
        .then(() => router.push('/login'))
    }
    
    function showUserPage(){
        handleCloseUserMenu()
        router.push('/profile')
    }
  
    function handleCloseNavMenu() {
        setAnchorElNav(null);
    };

    function handleOpenNavMenu(event) {
      setAnchorElNav(event.currentTarget);
    };

    function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
    };

    function handleCloseUserMenu() {
    setAnchorElUser(null);
    };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant='h6' component='div' sx={{ flexGrow: 1 }} onClick={() => router.push('/tasks')}>
                        Tasks
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/appointments')}>
                        Appointments
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/finances')}>
                        Finances
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Weather
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign={'left'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Calendar
                    </Typography>
                </MenuItem>
              </Menu>
            </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IRIS
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                {globalState.state.isLoggedIn ? 
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4E03AQEoSSLrCiBRiw/profile-displayphoto-shrink_400_400/0/1682359181635?e=1692835200&v=beta&t=jxXx3Tn0XydBbmzPgKdBtew3bwhJYQKcc1dBWU5xle8" />
                    </IconButton> 
                    :
                    <Button variant="default" href={'/login'}>Log In</Button>
                    
                }
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={showUserPage}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={logOut}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
