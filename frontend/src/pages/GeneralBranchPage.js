import React from 'react'
import { GreenHeaderContainer, MainContentContainer, PageContainer, ContentContainer, ContentWrapper } from '../components/styles/Containers'
import NavBar from '../components/NavBar'
import { BranchHeader, HeaderMatrix, TagCounter } from '../components/styles/BranchGlobals'
import { GeneralBranchHeaderContainer } from '../components/styles/GeneralBranchPage.styled'
import SearchBar from '../components/SearchBar'
import AlphabetBar from '../components/AlphabetBar'

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