import React from 'react'
import { Nav, NavContainer, NavLogo, NavItems, NavItem, StyledLink } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo src={navLogo}></NavLogo>
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