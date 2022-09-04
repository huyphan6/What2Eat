import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Menu
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color='inherit' onClick={() => navigate("/home")}> Home </Button>

        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;