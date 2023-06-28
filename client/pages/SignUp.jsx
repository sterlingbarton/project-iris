import * as React from 'react';
import Head from "next/head";
import {useRouter} from 'next/router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { GlobalState } from '../components/Layout';


export default function SignUp() {
    const router = useRouter();

    const [formData, setFormData] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    })

    const globalState = React.useContext(GlobalState)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 

    function handleSignUp(e){
        e.preventDefault()
        const newUser = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            username: formData.username,
            password: formData.password
        }
        fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then((r) => r.json())
        .then(data => globalState.dispatch({ type: 'SIGNUP', payload: data }))
        .then(() => router.push('/'))
    }

  return (
    <>
        <Head>
          <title>IRIS | Signup</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Card sx={{
                margin: '3rem auto',
                maxWidth: '700px',
            }}>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSignUp}
                >
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TextField
                            required
                            id="standard-required-email"
                            label="Email"
                            variant="standard"
                            name='email'
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            />
                        <Box variant='div'>
                            <TextField
                                required
                                id="standard-required-first-name"
                                label="First Name"
                                variant="standard"
                                name='first_name'
                                size="small"
                                value={formData.first_name}
                                onChange={handleChange}
                                />
                            <TextField
                                required
                                id="standard-required-last-name"
                                label="Last Name"
                                variant="standard"
                                name='last_name'
                                size="small"
                                value={formData.last_name}
                                onChange={handleChange}
                                />
                        </Box>
                        <Box variant='div'>
                            <TextField
                                required
                                id="standard-required-username"
                                label="Username"
                                variant="standard"
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                />
                            <TextField
                                required
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                />
                        </Box>
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
                                <Button variant="outlined" onClick={() => router.push('/login')} >Login</Button>
                            </ButtonGroup>
                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </main>
    </>
  )
}

