import * as React from 'react';
import {useRouter} from 'next/router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { GlobalState } from '../components/Layout';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditProfile({open, setOpen}) {
  const globalState = React.useContext(GlobalState);
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    first_name: globalState.state.user.first_name,
    last_name: globalState.state.user.last_name,
    email: globalState.state.user.email,
    username: globalState.state.user.username,
  })


  function handleClose() {
    setOpen(false);
  };

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  } 

  function handleProfileChange(e){
    handleClose()
    e.preventDefault()
    if(!Object.values(formData).includes('')){
      fetch(`/api/users/${globalState.state.user.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      .then((r) => {
        if (r.ok){
          <Alert severity="success">Edit profile successful.</Alert>
          return r.json()
        }
      })
      .then(data => globalState.dispatch({ type: 'EDIT', payload: data }))
      .then(() => router.push('/profile'))
    }else{
      <Alert severity="error">Please fill out all fields.</Alert>      
    }
  }


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton aria-label="close" size="small" sx={{
          justifyContent: 'right',
          pr: '.75rem',
          pt: '.75rem',
        }}>
          <CloseRoundedIcon fontSize="inherit" onClick={handleClose}/>
        </IconButton>
        <DialogTitle sx={{
          pt: '0',
          pb: '.5rem',
          fontSize: '28px'
        }}>{"Edit Profile"}</DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pb: '.5rem'
        }}>
          <Box variant='div'>
            <TextField
              autoFocus
              id="standard-first-name"
              label="First Name"
              variant="standard"
              name='first_name'
              size="small"
              value={formData.first_name}
              onChange={handleChange}
            />
            <TextField
              id="standard-last-name"
              label="Last Name"
              variant="standard"
              name='last_name'
              size="small"
              value={formData.last_name}
              onChange={handleChange}
            />
          </Box>
            <TextField
              id="standard-username"
              label="Username"
              fullWidth
              variant="standard"
              name='username'
              size="small"
              margin='normal'
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              id="standard-email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              name='email'
              size="small"
              margin='normal'
              value={formData.email}
              onChange={handleChange}
            />
        </DialogContent>
        <DialogActions sx={{
          pb: '1rem',
          pr: '1rem',
          pt: '0'
        }}>
          <Button onClick={handleProfileChange}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}