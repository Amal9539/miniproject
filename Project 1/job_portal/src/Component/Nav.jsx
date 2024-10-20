import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div><AppBar color='yellow' >
        <Toolbar>
        <Typography  variant="h3"sx={{flexGrow:1}} textAlign={'left'}  >JOB PORTAL</Typography> &nbsp;&nbsp;
         <Link to="/signup">
       <Button variant ="contained" sx={{backgroundColor:"white",color:"blue"}}>Signup</Button></Link> &nbsp;&nbsp;
       <Link to ="/login">
       <Button variant ="contained" sx={{backgroundColor:"white",color:"blue"}}>Login</Button></Link> &nbsp;&nbsp;
       <Link to="/home">
       <Button variant="contained" sx={{backgroundColor:"white",color:"blue"}}>Logout</Button></Link>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav