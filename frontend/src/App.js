import React from 'react';
import EmployeeView from './pages/EmployeeView';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import LoginPage from "./pages/LoginPage";
import PersonalView from "./pages/PersonalView";
import GeneralBranchPage from './pages/GeneralBranchPage';
import GlobalStyles from './components/styles/Global';
import DetailedBranchPage from './pages/DetailedBranchPage';
import MapPage from './pages/MapPage';
import NavBar from "./components/NavBar";

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


function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
          <GlobalStyles />
              {/* Will move navbar to here*/}
            {/*<NavBar/>*/}
            <Routes>
                <Route path="/addUser" element={<AddUserPage />} />
                {/*<Route path="/branch" element={<BranchView/>}/>*/}
                <Route path="/detailBranch" element={<DetailedBranchPage />}/>
                <Route path="/generalBranch" element={<GeneralBranchPage />}/>
                <Route path="/personal" element={<PersonalView/>}/>
                <Route path="/employee" element={<EmployeeView/>}/>
                <Route path="/map" element={<MapPage/>}/>
                <Route path="/" element={<LoginPage />} />

            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </>

  );
}

export default App;
