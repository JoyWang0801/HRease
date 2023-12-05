import styled from "styled-components"

export const BranchHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    height: 70%;
    margin-bottom: 40px;
    /* background-color: green; */
    gap: 50px;

    @media(max-width: 768px) {
        width: 90%;

    }
`

export const BranchInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
    gap: 15px;

    @media (max-width: 768px) {
        gap: 30px;
    }
    /* background-color: pink; */
`

export const HeaderMatrix = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 40px;
`

export const BranchHeader = styled.h1`
    font-size: clamp(26px, 3vw, 34px);
    color: var(--white);

    @media (max-width: 768px) {
        color: black;
        font-size: clamp(12px, 6vw, 30px);
    }
`

export const TagCounter = styled.div`
    padding: 0 20px;
    line-height: clamp(26px, 2vw, 30px);
    height: clamp(26px, 2vw, 30px);
    border-radius: 10px;
    font-size: 14px;
    background-color: var(--hre-light-green);
    color: var(--hre-dark-green);

    @media (max-width: 768px) {
        padding: 0;
        background-color: white;
        color: var(--hre-dark-green);
    }
`