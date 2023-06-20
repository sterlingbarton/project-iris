import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SignUp() {
    const [formData, setFormData] =useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    })

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
            required
            id="standard-required-email"
            label="Email"
            defaultValue="Email"
            value={formData.email}
            helperText="Some important text"
            variant="standard"
            />
        <TextField
            required
            id="standard-required-username"
            label="Username"
            defaultValue="Username"
            value={formData.username}
            helperText="Some important text"
            variant="standard"
            />
        <TextField
            error
            id="standard-password-input"
            label="Password"
            type="password"
            defaultValue="Password"
            value={formData.password}
            autoComplete="current-password"
            helperText="Some important text"
            variant="standard"
            />
        <Button variant="outlined">Submit</Button>
    </Box>
  )
}

