import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chartrem
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Αρχική
        </Button>
        <Button color="inherit" component={RouterLink} to="/data-config">
          Ρύθμιση Δεδομένων
        </Button>
        <Button color="inherit" component={RouterLink} to="/chart-settings">
          Ρυθμίσεις Γραφήματος
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 