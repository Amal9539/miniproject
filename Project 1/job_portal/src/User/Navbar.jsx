import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false); // State to toggle drawer

  // Function to handle drawer toggle
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Drawer contents
  const DrawerList = (
    <Box
      sx={{ width: 250}} // Increased width to 250px
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <Link to='/bj' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemText primary="Browse Jobs" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to='/ap' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemText primary="View Applied Jobs" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to='/update/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemText primary="Update Profile" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      
      <AppBar color='yellow'>
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          <Typography 
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: 'black' }}
          >
            USER DASHBOARD
          </Typography>

          {/* Avatar button for profile drawer */}
          <IconButton onClick={toggleDrawer(true)}>
            <Avatar alt="User Profile" src="/broken-image.jpg" />
          </IconButton>
        </Toolbar>

        {/* Drawer that slides from the side */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </AppBar>
    </div>
  );
};

export default Navbar;
