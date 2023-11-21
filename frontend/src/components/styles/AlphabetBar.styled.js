import styled from "styled-components";

export const AlphabetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    line-height: 30px;
`

export const Letter = styled.div`
    font-size: 18px;
    color: var(--hre-light-green);
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--white);
        cursor: pointer;
    }
`

export const AlphaHeader = styled.h1`

`