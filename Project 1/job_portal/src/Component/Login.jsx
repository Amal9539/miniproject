import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios';


const Login = () => {
  
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({ state: false, message: "" });
  const navigate = useNavigate();


  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError({
        state: true,
        message: "Please enter a valid email address.",
      });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }
    if (!password.value || password.value.length < 8) {
      setPasswordError({
        state: true,
        message: "Password must be at least 8 characters long.",
      });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    return isValid;
  };

const handleSubmit = async (event) => {
  console.log('handleSubmit called'); // 1. Check if function is called
  event.preventDefault();
  console.log('Input data:', input); // 2. Verify input data

  const isValid = validateInputs();
  console.log('Is valid:', isValid); // 4. Check validation result

  if (isValid) {
    try {
      console.log('Sending request to API...'); // 5. Check request initiation
      const response = await axios.post('http://localhost:8000/api/v1/user/login', input);
      console.log('API response:', response); // 6. Check API response

      if (response.data.success) {
        console.log('Login successful, navigating...'); // 7. Check navigation
        navigate(input.role === 'admin' ? '/Adminhome' : '/Dashboard');
      } else {
        console.log('Login failed, API response:', response); // 8. Check error handling
      }
    } catch (error) {
      console.error('handleSubmit error:', error); // 9. Check error handling
    }
  } else {
    console.log('Validation failed, not sending request'); // 10. Check validation failure
  }
};



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const isValid = validateInputs();
  
  //   if (isValid) {
  //     try {
  //       const response = await axios.post('http://localhost:8000/api/v1/user/login', input);
  //       console.log(response);
  //       if (response.data.success) {
  //         navigate(input.role === 'admin' ? '/ad' : '/db');
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };
  
  //     const isValidEntry = validateInputs();
  //     if (response.data.success && isValidEntry) {
  //       if (loginData.role == "admin") navigate("");
  //       else navigate("/db");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "50px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 20px rgba(0,0,0,0.2)" // Correct property name
  };

  return (
    <>
    <Nav/>
    <div className="wrapper"> <br/><br/>
    
    <Typography variant='h6' style={heading}>LOGIN PAGE</Typography>
    <form onSubmit={handleSubmit}>
    
        <TextField label="Email" variant='outlined'  error={emailError.state} helperText={emailError.message} name='email'  onChange={handleChange}/><br/> <br/>
        <TextField label="Password" type='password' variant="outlined"  error={passwordError.state} helperText={passwordError.message} name='password' onChange={handleChange}/><br/> <br/>
        <div className='Remember-password'>
          <label><input type="checkbox"/>Remember Me</label>&nbsp;&nbsp;
          <a href='#'>Forgot Password</a><br/>
         
          <p>Do You Have An Account? <Link to='/signup'><a href='#'>Signup</a></Link></p>
          </div><br/><br/>
          
        <Button variant="contained">Login</Button><br/><br/>
        </form>
    </div>
    </>
  )
}

export default Login
