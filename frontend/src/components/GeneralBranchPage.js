import React from 'react'
import Sidebar from '../Sidebar'
import { GreenHeaderContainer, MainContentContainer, PageContainer, ContentContainer, ContentWrapper } from './styles/Containers'
import NavBar from './NavBar'
import { AlphabetContainer, BranchCount, BranchHeader, BranchHeaderContainer, BranchHeaderMatrix, GeneralSearch, Letter } from './styles/GeneralBranchPage.styled'
import SearchBar from './SearchBar'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function GeneralBranchPage() {
    
    return (
        <PageContainer>
            <NavBar />
            <MainContentContainer>
                <GreenHeaderContainer>
                    <BranchHeaderContainer>
                        <BranchHeaderMatrix>
                            <BranchHeader>Branches</BranchHeader>
                            <BranchCount>12 Branches</BranchCount>
                        </BranchHeaderMatrix>
                        <AlphabetContainer>
                            {alphabet.map((letter, i) => (
                                <Letter>{letter}</Letter>
                            ))}
                        </AlphabetContainer>
                    </BranchHeaderContainer>
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