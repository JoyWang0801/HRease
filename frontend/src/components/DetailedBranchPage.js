import React from "react"
import { CardContainer, ContentContainer, ContentWrapper, GreenHeaderContainer, MainContentContainer, PageContainer } from "./styles/Containers"
import NavBar from "./NavBar"
import { BranchHeaderContainer, BranchHeader, BranchHeaderMatrix, TagCounter, BranchInformationWrapper } from "./styles/BranchGlobals"
import AlphabetBar from "./AlphabetBar";
import { BackButton, ButtonContainer, ButtonLabel, FAArrow } from "./styles/DetailedBranchPage.styled";
import SearchBar from "./SearchBar";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AlphabetHeader from "./AlphabetHeader";
import EmployeeCard from "./EmployeeCard";
import nohraPic from '../assets/nohra-aaron.png'
import johnPic from '../assets/john-adams.png'


const emp1 = {
    firstName: "Nohra",
    lastName: "Aaron",
    position: "Sales Associate",
    jobType: "Part-time",
    picture: nohraPic
}

const emp2 = {
    firstName: "John",
    lastName: "Adams",
    position: "Manager",
    jobType: "Full-time",
    picture: johnPic
}


const employees = [emp1, emp2]


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
                    <ContentWrapper>
                        <AlphabetHeader letter={ "A" }/>
                        <CardContainer>
                            {employees.map((employee, i) => (
                                <EmployeeCard key={i} employee={employee}/>
                            ))}
                        </CardContainer>
                    </ContentWrapper>
                </ContentContainer>
            </MainContentContainer>
        </PageContainer>
    )
}

export default DetailedBranchPage