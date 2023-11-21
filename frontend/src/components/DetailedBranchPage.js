import React from "react"
import { ContentContainer, ContentWrapper, GreenHeaderContainer, MainContentContainer, PageContainer } from "./styles/Containers"
import NavBar from "./NavBar"
import { BranchHeaderContainer, BranchHeader, BranchHeaderMatrix, TagCounter, BranchInformationWrapper } from "./styles/BranchGlobals"
import AlphabetBar from "./AlphabetBar";
import { BackButton, ButtonContainer, ButtonLabel, FAArrow } from "./styles/DetailedBranchPage.styled";
import SearchBar from "./SearchBar";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function DetailedBranchPage() {
    return(
        <PageContainer>
            <NavBar />
            <MainContentContainer>
                <GreenHeaderContainer>
                    <BranchHeaderContainer>
                        <ButtonContainer>
                            <BackButton type="button">
                                <FAArrow icon={faArrowLeft}></FAArrow>
                            </BackButton>
                            <ButtonLabel>Branches</ButtonLabel>
                        </ButtonContainer>
                        <BranchInformationWrapper>
                            <BranchHeaderMatrix>
                                <BranchHeader>Varsity Drive • Calgary, AB</BranchHeader>
                                <TagCounter>53 Employees</TagCounter>
                            </BranchHeaderMatrix> 
                            <AlphabetBar />
                        </BranchInformationWrapper>
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

export default DetailedBranchPage