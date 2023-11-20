import styled from 'styled-components'

export const BranchHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    height: 35%;
    margin-bottom: 25px;
    /* background-color: blue; */
`
export const BranchHeaderMatrix = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 40px;
    /* background-color: blue; */
`
export const BranchHeader = styled.h1`
    font-size: 34px;
    color: var(--white);
`

export const BranchCount = styled.div`
    padding: 0 20px;
    line-height: 30px;
    height: 30px;
    border-radius: 10px;
    font-size: 14px;
    background-color: var(--hre-light-green);
    color: var(--hre-dark-green);
`

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