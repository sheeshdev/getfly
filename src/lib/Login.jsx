import React from 'react'
import logo from './logo.png'
import '../App.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='main_box'>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='form'>
        <div>
          <h1>Login</h1>
          <p>Welcome to productname. Please login to your account</p>
        </div>
        <form>

          <div>
            <label>College id</label>
            <TextField sx={{ py: '4px', width: '100%' }} id="outlined-basic" label="id@pvppcoe.ac.in" variant="outlined" />
          </div>

          <div>
            <label>Password</label>
            <FormControl sx={{ py: '4px', width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className='btn_main' >
            <button type="button">Login</button>
          </div>
        </form>
        <div className='section_footer'>
          <p>www.getflytechnologies.com</p>
        </div>
      </div>
    </div>
  )
}

export default Login