import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
`

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 85vw;
`

export const GreenHeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 90%;
    height: 35%;
    border-radius: 0 0 30px 0;
    background-color: var(--hre-green);
`

export const ContentContainer = styled.div`
    display: flex;
    width: 90%;
    height: 500px;
    /* background-color: green; */
`

export const ContentWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 500px;
    /* background-color: blue; */
`