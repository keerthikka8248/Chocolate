import React from 'react'
import '../Styles/Login.css'

const Login = () => {
  return (
    <div className='login-background'>
    <div className='login-container'>
        <h2 className='login-heading'>LOGIN</h2>
        <form>
            <input type='email' placeholder='Email ID' className='login-input'></input>
            <input type='passsword' placeholder='Enter Password' className='login-input'></input>
            <button type='submit' className='login-button'>Login</button>
        </form>
        <a href='/forget-password' className='forgot-password-link'>Forgot Password?</a>
    </div>
    </div>
  )
}

export default Login