import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from 'next/router'

export default function InnerNav() {
    const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} onClick={() => router.push('/tasklist')}>
            Tasks
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/appointments')}>
            Appointments
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/finance')}>
            Finance
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

