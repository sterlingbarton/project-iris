import * as React from 'react';
import Head from "next/head";
import {useRouter} from 'next/router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalState } from '../components/Layout';
import EditProfile from '../components/EditProfile';


export default function Profile() {
  const router = useRouter();

  const globalState = React.useContext(GlobalState)

  const [open, setOpen] = React.useState(false);

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
    <>
      <Head>
        <title>IRIS | Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card sx={{
          margin: '3rem auto',
          maxWidth: '700px',
        }}>
          <CardContent sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Typography variant='h5'sx={{mb:'.5rem'}}>{globalState.state.user.first_name}&nbsp;{globalState.state.user.last_name}</Typography>
            <Typography variant='h6'sx={{mb:'.75rem'}}>@{globalState.state.user.username}</Typography>
            <Typography variant='p' sx={{mb:'1.5rem'}}>{globalState.state.user.email}</Typography>
            <CardActions>
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
            </CardActions>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

