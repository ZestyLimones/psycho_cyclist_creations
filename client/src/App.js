import React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography mx="auto" variant="h4" component="div">
            Here are my creations!
          </Typography>
        </Toolbar>
      </AppBar>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
