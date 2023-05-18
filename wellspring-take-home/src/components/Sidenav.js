import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

const HomeLogo = () => <img src="/Icons/home-line.png" alt="Home Logo" />;
const PatientsLogo = () => <img src="/Icons/heart-hand.png" alt="Heart Hand Logo" />



export default function Sidenav() {
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {['Home', 'Patients'].map((text) => (
            <ListItem component={Link} to={`/${text}`} key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Home' ? <HomeLogo /> : <PatientsLogo />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
        ))}
      </List>
    </div>
  );

  return(
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
