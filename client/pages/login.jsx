import * as React from 'react';
import Head from "next/head";
import {useRouter} from 'next/router'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { GlobalState } from '../components/Layout';


export default function LogIn() {
  const router = useRouter();

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const globalState = React.useContext(GlobalState)

  function handleUsername(e){
    setUsername(e.target.value)
}
  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleLogIn(e){
    e.preventDefault()
    if(!username){
      globalState.dispatch({ type: 'OPEN-SNACKBAR', payload: {message: 'Must enter a username', alertState: 'error'} })
      setTimeout(() => {
        globalState.dispatch({ type: 'CLOSE-SNACKBAR' })
      }, 5000) 
    }else if(!password){
      globalState.dispatch({ type: 'OPEN-SNACKBAR', payload: {message: 'Must enter a password', alertState: 'error'} })
      setTimeout(() => {
        globalState.dispatch({ type: 'CLOSE-SNACKBAR' })
      }, 5000) 
    }else if(username != '' && password != ''){
      fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
      })
      .then((r) => {
        if(r.ok){
          globalState.dispatch({ type: 'OPEN-SNACKBAR', payload: {message: 'Login success', alertState: 'success'} })
          setTimeout(() => {
            globalState.dispatch({ type: 'CLOSE-SNACKBAR' })
          }, 5000)
          return r.json()}
        })
      .then(data => globalState.dispatch({ type: 'LOGIN', payload: data }))
      .then(() => router.push('/'))
    }else{
      globalState.dispatch({ type: 'OPEN-SNACKBAR', payload: {message: 'Failed to log in', alertState: 'error'} })
      setTimeout(() => {
        globalState.dispatch({ type: 'CLOSE-SNACKBAR' })
      }, 5000)
    }

  }

  return (
    <>
        <Head>
          <title>IRIS | Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Card sx={{
            margin: '7rem auto',
            maxWidth: '700px',
          }}>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

            }}>
              <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleLogIn}
              >
                <TextField
                    required
                    id="standard-required-username"
                    label="Username"
                    helperText="Enter your username"
                    variant="standard"
                    name='username'
                    value={username}
                    onChange={handleUsername}
                    />
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    helperText="Enter your password"
                    variant="standard"
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    />
                <CardActions>
                  <ButtonGroup 
                      variant="outlined" 
                      aria-label="outlined button group"
                      sx={{
                        display: 'block',
                        margin: '0 auto'
                      }}
                      >
                      <Button variant="outlined" type='submit'>Submit</Button>
                      <Button variant="outlined" onClick={() => router.push('/signup')} >Sign Up</Button>
                  </ButtonGroup>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        </main>
    </>
  )
}

