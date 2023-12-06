import styled from "styled-components";

export const GreenBox = styled.div `
    color: red;
    width: 100%;
    height: 100%;
    background-color: var(--hre-light-green);
    border: 3px solid var(--hre-dark-green);
    border-radius: 10px;
`;

export const TopWrapper = styled.div `
    display: flex;
    flex-direction: row;
    // justify-content: space-evenly;
    gap: 50px;
`;

export const Time = styled.div `
    width: 20%;
    margin-top: 30px;
    font-size: 100px;
    flex: 1;
`;

export const ClockInOutButton = styled.div `
    background-color: var(--hre-dark-green);
    color: white;
    text-align: center;
    padding: 5%;
    border-radius: 10px;
    box-shadow: 1px 1px 5px grey;
    font-size: 32px;
    display: flex;
    align-items: center;
    flex: 1;
`;

export const ProfileCard = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const ContainerWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 1000px;
    align-items: center;
    gap: 100px;
`;

export const EmployeeName = styled.div `
    font-size: 48px;
    font-weight: 800;
`;

export const ProfilePic = styled.img `
    width: 175px;
`;

export const EmployeeRole = styled.div `
`;

export const EmployeePronouns = styled.div `
    font-weight: bold;
`;

export const ProfileCardInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    font-size: 22px;
    flex: 3;
    padding-right: 20px;
    margin-right: 50px;
`;