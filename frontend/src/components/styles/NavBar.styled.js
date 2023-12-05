import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 100vh;
    z-index: 1;
    box-shadow: 4px 0px 20px 1px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      width: 100vw;
      height: 7vh;
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 70px;
    position: fixed;
    width: 15vw;
    height: 80%;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
      width: 100vw;
      height: 8%;
      background-color: var(--hre-green);
    }
`

export const NavLogo = styled.img`
    width: 80%;
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 8%;

    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      height: auto;
    }
`
export const NavItem = styled.div`
    font-weight: 500;
    transition: 0.3s ease-in-out;
    /* padding: 10px; */

    &:hover {
        color: var(--hre-green);
        cursor: pointer;
        /* background-color: lightgrey; */
        border-radius: 10px; 
    }

    @media (max-width: 768px) {
      &:hover {
        
      }
    }
`

export const StyledLink = styled(NavLink)`
  font-size: clamp(12px, 3vw, 26px);
  font-weight: 500;
  transition: 0.3s ease-in-out;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    background-color: lightgrey;
    border-radius: 10px;
  }
  &.active {
    color: var(--hre-green);

    @media (max-width: 768px) {
      color: black;
    }
  }

  @media (max-width: 768px) {
    color: var(--white);
  }
`;