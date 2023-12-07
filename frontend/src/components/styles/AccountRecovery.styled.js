import styled from "styled-components";

export const Description = styled.div`
    font-size: 16px;
`;

export const EmailInput = styled.input `
    border-radius: 40px;
    padding: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
`;

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`;

export const NextButton = styled.div `
    background-color: var(--hre-green);
    border-radius: 40px;
    text-align: center;
    width: 150px;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
`;