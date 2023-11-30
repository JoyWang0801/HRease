import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 100vh;
    z-index: 1;
    box-shadow: 4px 0px 20px 1px rgba(0, 0, 0, 0.25);
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 70px;
    position: fixed;
    width: 15vw;
    height: 80%;
`

export const NavLogo = styled.img`
    width: 80%;
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 40%;
`
export const NavItem = styled.div`
    font-size: 26px;
    font-weight: 500;
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--hre-green);
        cursor: pointer;
    }
`