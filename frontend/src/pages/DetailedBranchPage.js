import React, { useState, useEffect } from "react"
import { CardContainer, ContentContainer, ContentWrapper, GreenHeaderContainer, MainContentContainer, OuterContentContainer, PageContainer } from "../components/styles/Containers"
import NavBar from "../components/NavBar"
import { BranchHeaderContainer, BranchHeader, HeaderMatrix, TagCounter, BranchInformationWrapper } from "../components/styles/BranchGlobals"
import AlphabetBar from "../components/AlphabetBar";
import { BackButton, ButtonContainer, ButtonLabel, EmployeeTagCounter, FAArrow } from "../components/styles/DetailedBranchPage.styled";
import SearchBar from "../components/SearchBar";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AlphabetHeader from "../components/AlphabetHeader";
import EmployeeCard from "../components/EmployeeCard";
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
    const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const updateViewport = () => {
                setIsMobile(window.innerWidth <= 768);
            }

            updateViewport();

            window.addEventListener('resize', updateViewport);
            
            return () => {
                window.removeEventListener('resize', updateViewport);
            }
        }, []);

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
                                {!isMobile ? <TagCounter>{allEmployees.length} Employees</TagCounter> : null}
                            </HeaderMatrix>
                            {!isMobile ? <AlphabetBar onLetterClick={handleLetterClick} /> : <SearchBar handleSearchChange={handleSearchChange}/>}
                        </BranchInformationWrapper>
                    </BranchHeaderContainer>
                </GreenHeaderContainer>
                <OuterContentContainer>
                    <ContentContainer>
                        {   
                            isMobile ? null
                            :
                            <ContentWrapper>
                                <SearchBar handleSearchChange={handleSearchChange}/>
                            </ContentWrapper>
                        }
                        <ContentWrapper>
                            <HeaderMatrix>
                                <AlphabetHeader letter={letterFilter} />
                                {isMobile ? null : <EmployeeTagCounter>{filteredNames.length} Employees</EmployeeTagCounter>}
                            </HeaderMatrix>
                            <CardContainer>
                                {filteredNames.map((employee, i) => (
                                    <EmployeeCard key={i} employee={employee} />
                                ))}
                            </CardContainer>
                        </ContentWrapper>
                    </ContentContainer>
                    {isMobile ? <AlphabetBar onLetterClick={handleLetterClick} /> : null}
                </OuterContentContainer>
            </MainContentContainer>
        </PageContainer>
    )
}

export default DetailedBranchPage