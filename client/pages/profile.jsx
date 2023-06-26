import {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalState } from '../components/Layout';
import {useRouter} from 'next/router'
import EditProfile from '../components/EditProfile';


export default function UserPage() {
  const [open, setOpen] = useState(false);
  const globalState = useContext(GlobalState)

  const router = useRouter();

  function handleClickOpen(){
    setOpen(!open)
  }

  function deleteProfile() {
    fetch(`/api/users/${globalState.state.user.id}` , {
        method: 'DELETE',
    })
    .then(data => globalState.dispatch({ type: 'DELETE', payload: data}))
    .then(() => router.push('/signup'))
}

  return (
    <Box>
      <Typography variant='h5'>{globalState.state.user.first_name}&nbsp;{globalState.state.user.last_name}</Typography>
      <Typography variant='h6'>@{globalState.state.user.username}</Typography>
      <Typography variant='p'>{globalState.state.user.email}</Typography>
      <ButtonGroup 
        variant="outlined" 
        aria-label="outlined button group"
        sx={{
          display: 'block'
        }}
        >
          {!open ? 
          <Button variant="outlined" onClick={handleClickOpen}>Edit Profile</Button> 
          : 
          <EditProfile open={open} setOpen={setOpen}/>
          } 
        <Button variant="outlined" onClick={deleteProfile}>Delete Profile</Button>
      </ButtonGroup>
    </Box>
  )
}

