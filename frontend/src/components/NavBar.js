import React from 'react'
import { Nav, NavContainer, NavLogo, NavItems, NavItem, StyledLink,LogoutBtn } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'
import pb from '../lib/pocketbase'

// TODO - the Nav is not dynamic grow, or the Logo & StyledLink & NavItem is not fixed position
function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo src={navLogo}></NavLogo>
                <NavItems>
                    <StyledLink to={"/personal"}>Dashboard</StyledLink>
                    <StyledLink to={"/employee"}>Employee</StyledLink>
                    <StyledLink to={"/detailBranch"}>Branches</StyledLink>
                    <StyledLink to={"/map"}>Map</StyledLink>
                    <NavItem onClick={() => {
                        pb.authStore.clear();
                        console.log("authStore cleared")}}
                        to={"/"}>Logout</NavItem>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar