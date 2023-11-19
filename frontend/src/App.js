import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUserPage from "./AddUserPage";
import LoginPage from "./LoginPage";
import BranchView from "./BranchView";
import PersonalView from "./PersonalView";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#6EB38E',
            light: '#C4E0D1',
            dark: '#517562',
            contrastText:'#ffffff'
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
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/addUser" element={<AddUserPage />} />
                <Route path="/branch" element={<BranchView/>}/>
                <Route path="/personal" element={<PersonalView/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </>
  );
}

export default App;
