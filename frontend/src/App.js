import React from 'react';
import EmployeeView from './pages/EmployeeView';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import LoginPage from "./pages/LoginPage";
import BranchView from "./pages/BranchView";
import PersonalView from "./pages/PersonalView";

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
    }
});
import GeneralBranchPage from './components/GeneralBranchPage';
import GlobalStyles from './components/styles/Global';
import DetailedBranchPage from './components/DetailedBranchPage';

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
                <Route path="/employee" element={<EmployeeView/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </>
		<div>
			<GlobalStyles />
			{/* <GeneralBranchPage /> */}
			<DetailedBranchPage />
		</div>
  );
}

export default App;
