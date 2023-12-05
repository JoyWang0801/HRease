import styled from "styled-components"

export const BranchCardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    box-shadow: 0px 8px 15px 1px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateY(-3px);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
        height: 70px;
        border-radius: 0;
        border-bottom: 2px solid var(--hre-green);
        box-shadow: none;

        &:hover {
            transform: none;
        }
    }
`



export const BranchLeft = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const BranchName = styled.div`
    font-size: clamp(18px, 3vw, 26px);
    font-weight: 600;
`

export const BranchLocation = styled.div`
    font-size: clamp(12px, 2vw, 14px);
`

export const BranchRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;
`





