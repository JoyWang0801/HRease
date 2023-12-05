import React, { useEffect, useState } from 'react'
import { Nav, NavContainer, NavLogo, NavItems, NavItem, StyledLink } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'


function NavBar() {
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

    return (
        <NavContainer>
            <Nav>
                { !isMobile ? <NavLogo src={navLogo}></NavLogo> : null }
                <NavItems>
                    <StyledLink to={"/personal"}>Dashboard</StyledLink>
                    <StyledLink to={"/employee"}>Employee</StyledLink>
                    <StyledLink to={"/detailBranch"}>Branches</StyledLink>
                    <StyledLink to={"/"}>Map</StyledLink>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar