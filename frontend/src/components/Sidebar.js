import React, {useEffect, useState} from 'react';
import { List, ListItemButton, ListItemText, Paper, Box } from '@mui/material';
import logo from '../assets/Hrease_logo.png';
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index)
    console.log(selectedIndex)
  };

  useEffect(() => {
    console.log(selectedIndex);
    switch (selectedIndex)
    {
      case 0:
        navigate("/personal");
        break;
      case 1:
        navigate("/employee");
        break;
      case 2:
        navigate("/branch");
        break;
      case 3:
        navigate("/");
        break;
      default:
        console.log(`Sorry, we are out of ${selectedIndex}.`);
    }
  }, [selectedIndex])

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
    color: "primary.main",
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
