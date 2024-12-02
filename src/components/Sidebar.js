import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import './Sidebar.css'; // Import the sidebar styles


function Sidebar() {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem>
          <ListItemText primary="Quantum Learning Modules" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/quantum-basics">
          <ListItemText primary="Quantum Basics" />
        </ListItem>
        <ListItem button component={Link} to="/quantum-risks">
          <ListItemText primary="Quantum Risks" />
        </ListItem>
        <ListItem button component={Link} to="/quantum-safe-practices">
          <ListItemText primary="Quantum Safe Practices" />
        </ListItem>
        <ListItem button component={Link} to="/business-adoption">
          <ListItemText primary="Business Adoption" />
        </ListItem>
        <ListItem button component={Link} to="/closing-activity">
          <ListItemText primary="Closing Activity" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
