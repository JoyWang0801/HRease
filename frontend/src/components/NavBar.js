import React from 'react'
import { Nav, NavContainer, NavLogo, NavItems, NavItem, StyledLink } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        navigate('/', { replace: true }); // Navigate to the home page
        window.location.reload();
    };

    return (
        <NavContainer>
            <Nav>
                <NavLogo src={navLogo}></NavLogo>
                <NavItems>
                    <StyledLink to={"/personal"}>Dashboard</StyledLink>
                    <StyledLink to={"/employee"}>Employee</StyledLink>
                    <StyledLink to={"/detailBranch"}>Branches</StyledLink>
                    <StyledLink to={"/map"}>Map</StyledLink>
                    <StyledLink onClick={handleLogout}>Logout</StyledLink>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar