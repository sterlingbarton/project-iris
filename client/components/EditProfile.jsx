import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Slide from '@mui/material/Slide';
import { GlobalState } from '../components/Layout';
import {useRouter} from 'next/router'

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
    fetch(`/api/users/${globalState.state.user.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then((r) => {
      if (r.ok){
        r.json()
      }
      else{
        console.log('Failed to update profile')
      }
    })
    .then(data => globalState.dispatch({ type: 'EDIT', payload: data }))
    .then(() => router.push('/profile'))
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
        <IconButton aria-label="close" size="small">
          <CloseRoundedIcon fontSize="inherit" />
        </IconButton>
        <DialogTitle>{"Edit Profile"}</DialogTitle>
        <DialogContent>
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
            <TextField
              id="standard-username"
              label="Username"
              fullWidth
              variant="standard"
              name='username'
              size="small"
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
              value={formData.email}
              onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileChange}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}