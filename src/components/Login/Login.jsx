import React from 'react'
import chat from "../Welcome/chat.png"
import "./Login.css"
import { Button, TextField } from '@mui/material'
const Login = () => {
  return (
    <div className='login'>

<div className="login-left">
<img src={chat} alt="" />
</div>

<div className="login-right">
    <p>Login to your Account</p>
<TextField  id="standard-basic" label="Enter your name" variant="outlined"  />
<TextField id='outlined-password-input' label="password" type='password' />
<Button variant="outlined">Login</Button>
</div>
    </div>
  )
}

export default Login