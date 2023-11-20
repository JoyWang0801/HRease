import React from 'react'
import { Nav, NavContainer, NavLogo, NavItems, NavItem } from './styles/NavBar.styled'
import navLogo from '../Hrease_logo.png'

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <NavLogo src={navLogo}></NavLogo>
                <NavItems>
                    <NavItem>Dashboard</NavItem>
                    <NavItem>Employee</NavItem>
                    <NavItem>Branch</NavItem>
                    <NavItem>Map</NavItem>
                </NavItems>
            </Nav>
        </NavContainer>
    )
}

export default NavBar