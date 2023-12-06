import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        height: 100vh;
        flex-direction: column-reverse;
        justify-content: space-between;
        overflow: hidden;
    }
`

export const MainContentContainer = styled.div`
    margin-left: 20vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 85vw;

    @media (max-width: 768px) {
        height: 93vh;
        width: 100vw;
        margin-left: 0;
        overflow: scroll;
    }
`

export const GreenHeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 90%;
    height: 250px;
    border-radius: 0 0 30px 0;
    background-color: var(--hre-green);

    @media (max-width: 768px) {
        width: 100vw;
        height: 30%;
        border-radius: 0 0 0 0;
     background-color: var(--white);
    }
`

export const OuterContentContainer = styled.div`
    display: flex;
    height: 70%;
    justify-content: space-between;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 90%;

    @media (max-width: 768px) {
        width: 90%;
        gap: 20px;
    }
`

export const ContentWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 30px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`