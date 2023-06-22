import { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GlobalState } from '../components/Layout';
import {useRouter} from 'next/router'


export default function SignUp() {
    const [formData, setFormData] =useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    })

    const router = useRouter();

    const globalState = useContext(GlobalState)

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
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSignUp}
        >
        <TextField
            required
            id="standard-required-first-name"
            label="First Name"
            helperText="Enter your first name"
            variant="standard"
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
            />
        <TextField
            required
            id="standard-required-last-name"
            label="Last Name"
            helperText="Enter your last name"
            variant="standard"
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            />
        <TextField
            required
            id="standard-required-email"
            label="Email"
            helperText="Enter your email"
            variant="standard"
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
        <TextField
            required
            id="standard-required-username"
            label="Username"
            helperText="Enter your username"
            variant="standard"
            name='username'
            value={formData.username}
            onChange={handleChange}
            />
        <TextField
            error
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            helperText="Enter your password"
            variant="standard"
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        <Button variant="outlined" type='submit'>Submit</Button>
    </Box>
  )
}

