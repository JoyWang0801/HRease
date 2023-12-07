import styled from "styled-components";

export const GreenBox = styled.div `
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
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
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
    margin-left: 5%;
    cursor: pointer;

    background-color: ${(props) => props.clockIn ? 'white' : 'var(--hre-dark-green)'};
    border: ${(props) => props.clockIn ? '2px solid var(--hre-dark-green)' : '2px solid var(--hre-dark-green)'};

    color: ${(props) => props.clockIn ? 'var(--hre-dark-green)' : 'white'};
`;

export const ProfileCard = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const ContainerWrapper = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 70%;
    align-items: center;
    gap: 100px;
`;

export const EmployeeName = styled.div `
    font-size: 48px;
    font-weight: 800;
`;

export const ProfilePic = styled.img `
    border-radius: 50%;
    width: 175px;
    height: 175px;
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

export const UL = styled.ul `
    list-style: none;
    font-size: 32px;
    margin-top: 60px;
`;

export const LI = styled.li `
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Label = styled.div `
`;

export const Info = styled.div `
    margin-right: 40px;
`;
