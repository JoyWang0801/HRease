import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: center;
`

export const Search = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 50px;
    border: 0;
    outline: 2px solid var(--hre-green);
    font-size: 16px;
    padding: 0 30px;
    color: var(--hre-dark-green);
    transition: 0.4s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }

    &::placeholder {
        color: var(--dark-grey);
    }
`