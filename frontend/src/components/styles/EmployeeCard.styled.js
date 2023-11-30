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
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const EmployeeFirstName = styled.div`
    font-size: 22px;
`

export const EmployeeLastName = styled.div`
    font-size: 26px;
    font-weight: 600;
`

export const PositonType = styled.div`
    color: var(--hre-dark-green);
    font-size: 12px;
`

export const ProfilePicture = styled.img`
    width: 90%;
`