import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 48%;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 8px 15px 1px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
    
    &:hover {
        transform: translateY(-3px);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
        height: 70px;
        box-shadow: none;
        border-bottom: 2px solid var(--hre-green);
        border-radius: 0;

        &:hover {
            transform: none;
        }
    }   
`

export const InfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 40%;
    height: 100%;
`

export const InfoRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;

    @media (max-width: 768px) {
        width: auto;
    }
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        align-items: center;
        flex-direction: row;
        gap: 5px;
    }
`

export const EmployeeFirstName = styled.div`
    font-size: 22px;

    @media screen {
        font-size: clamp(16px, 3vw, 22px);
    }
`

export const EmployeeLastName = styled.div`
    font-size: 26px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: clamp(16px, 3vw, 22px);
    }
`

export const PositonType = styled.div`
    color: var(--hre-dark-green);
    font-size: clamp(9px, 2vw, 12px);


`

export const ProfilePicture = styled.img`
    width: 90%;
`