import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import user_icon from '../assets/name (1).png'
import password_icon from '../assets/password.png'
import email_icon from '../assets/email.png'
import phone_icon from '../assets/phone.png'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Component/Nav'
import axios from 'axios'


const AdminSignup = () => {
  const [input, setInput] = useState({ fullname: "", email: "", phoneno: "", password: "", qualification: "" });
  const [fullnameError, setFullnameError] = useState({ state: false, message: "" });
  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [passwordError, setPasswordError] = useState({ state: false, message: "" });

  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(input.email)) {
      setEmailError({ state: true, message: "Please enter a valid email address." });
      isValid = false;
    } else {
      setEmailError({ state: false, message: "" });
    }

    if (input.password.length < 8) {
      setPasswordError({ state: true, message: "Password must be at least 8 characters long." });
      isValid = false;
    } else {
      setPasswordError({ state: false, message: "" });
    }

    if (!input.fullname.trim()) {
      setFullnameError({ state: true, message: "Please enter your full name." });
      isValid = false;
    } else {
      setFullnameError({ state: false, message: "" });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidEntry = validateInputs();

    if (!isValidEntry) return;

    try {
      const signupData = {
        fullname: input.fullname,
        email: input.email,
        password: input.password,
      };
      const response = await axios.post(
        'http://localhost:8000/api/v1/admin/signup',
        signupData,
        {
          headers: {
            "Content-Type": "application/json"
          },

        }
      );
      console.log(response)
      if (response.data.success) {
        navigate("/admin-login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "50px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 20px rgba(0,0,0,0.2)"
  };

  return (
    <>
      <Nav />
      <div className="spage">
        <br /><br />
        <div className='sign'>
          <Typography variant='h6' style={heading}>ADMIN SIGNUP PAGE</Typography>
        </div><br /><br />
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={user_icon} alt="" width="50" height="45" /> &nbsp;&nbsp;&nbsp;
            <TextField label="Full Name" name="fullname" variant="standard" value={input.fullname} error={fullnameError.state} helperText={fullnameError.message} onChange={handleChange} /><br />
          </div>

          <div className="input">
            <img src={email_icon} alt="" width="45" height="40" />&nbsp;&nbsp;&nbsp;
            <TextField label="Email" name="email" variant="standard" value={input.email} error={emailError.state} helperText={emailError.message} onChange={handleChange} /><br />
          </div>


          <div className="input">
            <img src={password_icon} alt="" width="50" height="45" />&nbsp;&nbsp;&nbsp;
            <TextField label="Password" name="password" type="password" variant="standard" value={input.password} error={passwordError.state} helperText={passwordError.message} onChange={handleChange} /><br />
          </div>


          <div>

            <Button type="submit" variant="contained">SIGNUP</Button><br /><br />

          </div>
        </form>
      </div>
    </>
  );
};

export default AdminSignup;
