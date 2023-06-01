import React from 'react'
import logo from './logo.png'

const Login = () => {
  return (
    <div>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <div className='form'>
          <div>
          <h1>Login</h1>
          <p>welcome to .Please login to your account</p>
          </div>
          <form>
            <label>College id</label>
            <input ></input>
            <label>Password</label>
            <input ></input>
          </form>
        </div>

    </div>
  )
}

export default Login