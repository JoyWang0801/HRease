import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import AddUserPage from "./AddUserPage";
import LoginPage from "./LoginPage";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/addUser" element={<AddUserPage />} />
            </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
