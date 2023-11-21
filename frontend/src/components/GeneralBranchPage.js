import React from 'react'
import { GreenHeaderContainer, MainContentContainer, PageContainer, ContentContainer, ContentWrapper } from './styles/Containers'
import NavBar from './NavBar'
import { BranchHeader, HeaderMatrix, TagCounter } from './styles/BranchGlobals'
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
                        <HeaderMatrix>
                            <BranchHeader>Branches</BranchHeader>
                            <TagCounter>12 Branches</TagCounter>
                        </HeaderMatrix>
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