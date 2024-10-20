import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar color='yellow'>
            <Toolbar>
                <Typography variant="h4" sx={{flexGrow:1}}textAlign={'left'}>ADMIN DASHBOARD</Typography>
                <Link to="/mj">
                <Button variant="contained">MANAGE JOBS</Button></Link>&nbsp;
                <Link to="/home">
                <Button variant="contained">LOGOUT</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar