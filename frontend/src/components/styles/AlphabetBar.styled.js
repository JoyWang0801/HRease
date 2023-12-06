import styled from "styled-components";

export const AlphabetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    line-height: 30px;

    @media (max-width: 768px) {
        height: 90%;
        flex-direction: column;
        width: 30px;
        line-height: 14px;
    }
`

export const Letter = styled.div`
    font-size: 18px;
    color: var(--hre-light-green);
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--white);
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        color: var(--hre-dark-green);
        font-size: 12px;

        &:hover {
            color: var(--hre-green);
        }
    }
`

export const AlphaHeader = styled.h1`

`