import styled from "styled-components";

export const GreenBox = styled.div `
    color: red;
    width: 500px;
    height: 500px;
    background-color: var(--hre-light-green);
    border: 3px solid var(--hre-dark-green);
    border-radius: 10px;
`;

export const TopWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Time = styled.div `
    width: 100px;
    font-size: 80px;
`;

export const ClockInOutButton = styled.div `
    background-color: var(--hre-dark-green);
    color: white;
    text-align: center;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px grey;
    font-size: 32px;
`;

export const ProfileCard = styled.div `
    display: flex;
    flex-direction: row;
`;

export const ContainerWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 1000px;
`;

export const EmployeeName = styled.div `
`;

export const ProfilePic = styled.img `
    width: 100px;
`;

export const EmployeeRole = styled.div `
`;

export const EmployeePronouns = styled.div `
`;
