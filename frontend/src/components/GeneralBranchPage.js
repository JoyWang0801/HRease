import React from 'react'
import { GreenHeaderContainer, MainContentContainer, PageContainer, ContentContainer, ContentWrapper } from './styles/Containers'
import NavBar from './NavBar'
import { BranchHeader, BranchHeaderMatrix, TagCounter } from './styles/BranchGlobals'
import { GeneralBranchHeaderContainer } from './styles/GeneralBranchPage.styled'
import SearchBar from './SearchBar'
import AlphabetBar from './AlphabetBar'

function GeneralBranchPage() {
    
    return (
        <PageContainer>
            <NavBar />
            <MainContentContainer>
                <GreenHeaderContainer>
                    <GeneralBranchHeaderContainer>
                        <BranchHeaderMatrix>
                            <BranchHeader>Branches</BranchHeader>
                            <TagCounter>12 Branches</TagCounter>
                        </BranchHeaderMatrix>
                        <AlphabetBar />
                    </GeneralBranchHeaderContainer>
                </GreenHeaderContainer>
                <ContentContainer>
                    <ContentWrapper>
                        <SearchBar />
                    </ContentWrapper>
                </ContentContainer>
            </MainContentContainer>
        </PageContainer>
    )
}


export default GeneralBranchPage