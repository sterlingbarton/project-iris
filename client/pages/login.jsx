import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GlobalState } from '../components/Layout';
import {useRouter} from 'next/router'


export default function SignIn() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const router = useRouter();

  const globalState = React.useContext(GlobalState)

  // login user
  function handleUsername(e){
    setUsername(e.target.value)
}
  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleLogin(e){
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: username, password: password})
    })
    .then((r) => r.json())
    .then(data => globalState.dispatch({ type: 'LOGIN', payload: data}))
    .then(() => router.push('/'))
  }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleLogin}
        >
        <TextField
            required
            id="standard-required-username"
            label="Username"
            placeholder="Username"
            helperText="Enter your username"
            variant="standard"
            name='username'
            value={username}
            onChange={handleUsername}
            />
        <TextField
            error
            id="standard-password-input"
            label="Password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            helperText="Enter your password"
            variant="standard"
            name='password'
            value={password}
            onChange={handlePassword}
            />
        <Button variant="outlined" type='submit'>Submit</Button>
    </Box>
  )
}

