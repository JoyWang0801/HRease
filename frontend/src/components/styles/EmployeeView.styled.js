import styled from "styled-components";

export const EmployeeInformationContainer = styled.div`
    display: flex;
    gap: 5%;
    align-items: center;
    width: 85%;
    height: 80%;
     margin-bottom: 30px;
    color: white;

    @media (max-width: 768px) {
        margin-bottom: 0;
        color: black;
    }
`

export const ProfilePicture = styled.img`
    width: 175px;
    height: 175px;
    border-radius: 50%;

    @media (max-width: 768px) {
        max-width: 150px; 
        max-height: 150px;
    }
`

export const EmployeeHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const EmployeeHeader = styled.h1`
    font-size: 34px;
`

export const EmployeePosition = styled.div`
    color: var(--hre-light-green);

    @media (max-width: 768px) {
        color: var(--hre-dark-green);
    }
`

export const InformationWrapper = styled.div`   
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    width: 90%;
    height: 90%;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
        height: auto;
        gap: 30px;
    }
`