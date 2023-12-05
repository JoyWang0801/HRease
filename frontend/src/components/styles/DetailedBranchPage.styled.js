import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagCounter } from "./BranchGlobals";

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 200px;
`

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: 0;
    line-height: 40px;
    background-color: var(--hre-light-green);
    color: var(--hre-dark-green);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
        cursor: pointer;
    }
`

export const ButtonLabel = styled.div`
    color: var(--hre-light-green);

    @media (max-width: 768px) {
        color: var(--dark-grey);
    }
`

export const FAArrow = styled(FontAwesomeIcon)`

`

export const EmployeeTagCounter = styled(TagCounter)`
    background-color: rgba(110, 179, 142, 0.41);
`