import styled from "styled-components";

export const InformationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    border-radius: 20px;
    box-shadow: 0px 8px 15px 1px rgba(0, 0, 0, 0.25);

`

export const CardHeader = styled.h1`
    font-size: 26px;
    text-align: center;
`

export const InformationMatrix = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 90%;
`

export const FourGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px 0;
`

export const FullHolder = styled.fieldset`
    width: 100%;
    height: 60px;
    border: 10px;
    border-radius: 50px;
    border: 2px solid var(--hre-green);
    padding-left: 20px;
    color: var(--dark-grey);
`

export const HalfHolder = styled.fieldset`
    display: flex;
    align-items: center;
    width: 48%;
    height: 60px;
    border: 10px;
    border-radius: 50px;
    border: 2px solid var(--hre-green);
    padding-left: 20px;
    color: var(--dark-grey);
`

export const Legend = styled.legend`
    font-size: 14px;
    color: var(--hre-green);
`