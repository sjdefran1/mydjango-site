import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import { NavHashLink } from "react-router-hash-link";

import MenuIcon from "@mui/icons-material/Menu";

function MyNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <NavHashLink smooth to='#intro'>
              <Button
                variant='text'
                sx={{ ml: 2, borderBottom: 2, borderColor: "secondary" }}>
                Intro
              </Button>
            </NavHashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>Menu item 2</MenuItem>
          <MenuItem onClick={handleClose}>Menu item 3</MenuItem>
        </Menu>
        <Typography variant='h6'>My Site</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyNavBar;
