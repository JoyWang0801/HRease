import React, { useEffect, useState } from 'react'
import { Nav, NavContainer, NavLogo, NavItems, StyledLink } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateViewport = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        updateViewport();

        window.addEventListener('resize', updateViewport);

        return () => {
            window.removeEventListener('resize', updateViewport);
        }
    }, []);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        navigate('/', { replace: true }); // Navigate to the home page
        window.location.reload();
    };

    return (
        <NavContainer>
            <Nav>
                {!isMobile ? <NavLogo src={navLogo}></NavLogo> : null}
                <NavItems>
                    <StyledLink to={"/personal"}>Dashboard</StyledLink>
                    <StyledLink to={"/employee"}>Employee</StyledLink>
                    <StyledLink to={"/detailBranch"}>Branches</StyledLink>
                    <StyledLink to={"/map"}>Map</StyledLink>
                </NavItems>
                <div style={{marginTop: isMobile ? '0' : 'auto', width: '100%' }}>
                    <StyledLink onClick={handleLogout}>Logout</StyledLink>
                </div>
            </Nav>
        </NavContainer>

    )
}

export default NavBar