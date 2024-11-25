import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "transparent", // Transparent to show the background
          boxShadow: "none",
          zIndex: 1, // Prevent AppBar from hiding content
          padding:"10px"
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: { xs: "0 1rem", md: "0 2rem" },
          }}
        >
          {/* Logo */}
          <img src={logo} />

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "center", // Centers the links horizontally
              flexGrow: 1, // Ensures it spreads across the available space
              
            }}
          >
            {["Home", "Blog", "Contact Us", "Services"].map((text) => (
              <Button
                key={text}
                sx={{ color: "#333", fontWeight: 500, fontSize: "1rem", fontSize:"24px",
                  fontWeight:"600",
                  color:"#000000",
                  textTransform:"capitalize" }}
              >
                {text}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Home", "Blog", "Contact Us", "Services"].map((text) => (
              <ListItem button key={text}>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
