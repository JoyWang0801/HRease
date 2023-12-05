import React from 'react';
import EmployeeView from './pages/EmployeeView';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import LoginPage from "./pages/LoginPage";
import PersonalView from "./pages/PersonalView";
import GeneralBranchPage from './pages/GeneralBranchPage';
import GlobalStyles from './components/styles/Global';
import DetailedBranchPage from './pages/DetailedBranchPage';
import { useEffect, useState } from 'react';
import MapViewPage from './pages/MapViewPage';
import ProtectedRoute from './components/ProtectedRoute';

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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn !== null) {
      return storedIsLoggedIn === 'true';
    } else {
      const isLoggedIn = false;
      localStorage.setItem('isLoggedIn', isLoggedIn.toString());
      return isLoggedIn;
    }
  });

  useEffect(() => {
    // Update 'isLoggedIn' in localStorage whenever the state changes
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    console.log("isLoggedIn: " + isLoggedIn);
  }, [isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
          <Route path="/addUser" element={<ProtectedRoute isLoggedIn={isLoggedIn}><AddUserPage /></ProtectedRoute>} />
          <Route path="/detailBranch" element={<ProtectedRoute isLoggedIn={isLoggedIn}><DetailedBranchPage /></ProtectedRoute>} />
          <Route path="/generalBranch" element={<ProtectedRoute isLoggedIn={isLoggedIn}><GeneralBranchPage /></ProtectedRoute>} />
          <Route path="/personal" element={<ProtectedRoute isLoggedIn={isLoggedIn}><PersonalView /></ProtectedRoute>} />
          <Route path="/employee" element={<ProtectedRoute isLoggedIn={isLoggedIn}><EmployeeView /></ProtectedRoute>} />
          <Route path="/map" element={<ProtectedRoute isLoggedIn={isLoggedIn}><MapViewPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
