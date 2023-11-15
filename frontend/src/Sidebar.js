import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <Paper elevation={3}>
      <List>
        {/* Dashboard */}
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Employee */}
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employee" />
        </ListItem>

        {/* Branch */}
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Branch" />
        </ListItem>

        {/* Logout */}
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Sidebar;
