import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import tick from "../images/tick.png"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <img style={{width:"30px",height:"30px"}} src={tick}/>
          <Typography sx={{ml:"15px"}} variant="h6" color="inherit" component="div">
            YS2-DO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}