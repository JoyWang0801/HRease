import styled from 'styled-components'
import { BranchHeaderContainer } from './BranchGlobals'
import { CardContainer } from './Containers'

export const GeneralBranchHeaderContainer = styled(BranchHeaderContainer)`
    height: 100px;
`

export const BranchCardContainer = styled(CardContainer)`
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
        gap: 5px;
    }
`
