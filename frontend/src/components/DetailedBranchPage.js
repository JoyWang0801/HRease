import React, { useState, useEffect } from "react"
import { CardContainer, ContentContainer, ContentWrapper, GreenHeaderContainer, MainContentContainer, PageContainer } from "./styles/Containers"
import NavBar from "./NavBar"
import { BranchHeaderContainer, BranchHeader, HeaderMatrix, TagCounter, BranchInformationWrapper } from "./styles/BranchGlobals"
import AlphabetBar from "./AlphabetBar";
import { BackButton, ButtonContainer, ButtonLabel, EmployeeTagCounter, FAArrow } from "./styles/DetailedBranchPage.styled";
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

const emp3 = {
    firstName: "John",
    lastName: "Doe",
    position: "Sales Associate",
    jobType: "Full-time",
    picture: johnPic
}

const allEmployees = [emp1, emp3]

function DetailedBranchPage() {

    const [filteredNames, setFilteredNames] = useState(allEmployees);
    const [letterFilter, setLetterFilter] = useState("");

    const handleLetterClick = (letter) => {
        setLetterFilter(letter)
        
        if (letter === 'All') {
            setFilteredNames(allEmployees);
        }
        else {
            const filteredEmployees = allEmployees.filter((person) => {
                const firstLetterLastName = person.lastName.charAt(0).toUpperCase();
                return firstLetterLastName === letter;
            });
            console.log(filteredEmployees);
            console.log(`Clicking from branch ${letter}`);
            setFilteredNames(filteredEmployees);
        }
    }

    const handleSearchChange = (event) => {
        console.log(event.target.value);
        const filteredEmployees = allEmployees.filter((person) => {
            return (person.firstName.toLowerCase().includes(event.target.value.toLowerCase()) || 
            (person.lastName.toLowerCase().includes(event.target.value.toLowerCase())));
        });
        setFilteredNames(filteredEmployees);
    }

    return (
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
                            <HeaderMatrix>
                                <BranchHeader>Varsity Drive • Calgary, AB</BranchHeader>
                                <TagCounter>{allEmployees.length} Employees</TagCounter>
                            </HeaderMatrix>
                            <AlphabetBar onLetterClick={handleLetterClick} />
                        </BranchInformationWrapper>
                    </BranchHeaderContainer>
                </GreenHeaderContainer>
                <ContentContainer>
                    <ContentWrapper>
                        <SearchBar handleSearchChange={handleSearchChange}/>
                    </ContentWrapper>
                    <ContentWrapper>
                        <HeaderMatrix>
                            <AlphabetHeader letter={letterFilter} />
                            <EmployeeTagCounter>{filteredNames.length} Employees</EmployeeTagCounter>
                        </HeaderMatrix>
                        <CardContainer>
                            {filteredNames.map((employee, i) => (
                                <EmployeeCard key={i} employee={employee} />
                            ))}
                        </CardContainer>
                    </ContentWrapper>
                </ContentContainer>
            </MainContentContainer>
        </PageContainer>
    )
}

export default DetailedBranchPage