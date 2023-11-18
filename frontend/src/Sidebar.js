import React, { useState } from 'react';
import { List, ListItemButton, ListItemText, Paper, Box } from '@mui/material';
import logo from './Hrease_logo.png';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const sidebarStyle = {
    backgroundColor: "white",
    color: "black",
    display: 'flex',
    flexDirection: 'column',
    height: "calc(100vh - 16px)",
  };

  const listItemTextStyle = {
    fontSize: '30px',
    fontWeight: '600',
  };

  const selectedStyle = {
    color: "#6EB38E",
    '& .MuiListItemText-primary': {
      fontWeight: '600',
    }
  };

  return (
    <Paper style={sidebarStyle} elevation={3}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <img src={logo} alt="Hrease Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Box flex={1} overflow="auto">
        <List component="nav">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            style={selectedIndex === 0 ? selectedStyle : null}
          >
            <ListItemText primary="Dashboard" primaryTypographyProps={{ style: listItemTextStyle }} />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            style={selectedIndex === 1 ? selectedStyle : null}
          >
            <ListItemText primary="Employee" primaryTypographyProps={{ style: listItemTextStyle }} />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            style={selectedIndex === 2 ? selectedStyle : null}
          >
            <ListItemText primary="Branch" primaryTypographyProps={{ style: listItemTextStyle }} />
          </ListItemButton>
        </List>
      </Box>
      <Box>
        <List>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            style={selectedIndex === 3 ? selectedStyle : null}
          >
            <ListItemText primary="Logout" primaryTypographyProps={{ style: listItemTextStyle }} />
          </ListItemButton>
        </List>
      </Box>
    </Paper >
  );
};

export default Sidebar;
