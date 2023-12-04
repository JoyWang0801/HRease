import React from 'react';
import EmployeeView from './pages/EmployeeView';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import LoginPage from "./pages/LoginPage";
import BranchView from "./pages/BranchView";
import PersonalView from "./pages/PersonalView";
import { useEffect, useState } from 'react';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6EB38E',
      light: '#C4E0D1',
      dark: '#517562',
      contrastText: '#ffffff'
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
  }
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'false');
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
          <Route path="/addUser" element={<AddUserPage />} />
          <Route path="/branch" element={<BranchView />} />
          <Route path="/personal" element={<PersonalView />} />
          <Route path="/employee" element={<EmployeeView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
