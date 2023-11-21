import styled from "styled-components"

export const BranchHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    height: 70%;
    margin-bottom: 40px;
    /* background-color: green; */
`

export const BranchInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
    /* background-color: pink; */
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

export const TagCounter = styled.div`
    padding: 0 20px;
    line-height: 30px;
    height: 30px;
    border-radius: 10px;
    font-size: 14px;
    background-color: var(--hre-light-green);
    color: var(--hre-dark-green);
`