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
import {useLocation} from "react-router-dom";



// const emp1 = {
//     firstName: "Nohra",
//     lastName: "Aaron",
//     position: "Sales Associate",
//     jobType: "Part-time",
//     picture: nohraPic
// }

// const emp2 = {
//     firstName: "John",
//     lastName: "Adams",
//     position: "Manager",
//     jobType: "Full-time",
//     picture: johnPic
// }

// const emp3 = {
//     firstName: "John",
//     lastName: "Doe",
//     position: "Sales Associate",
//     jobType: "Full-time",
//     picture: johnPic
// }

// const branch1 = {
//     name: "Brentwood",
//     city: "Calgary",
//     province: "AB",
//     size: 61
// }

// const allEmployees = [emp1, emp3]

function DetailedBranchPage({branch}) {
    const [letterFilter, setLetterFilter] = useState("All");
    const [isMobile, setIsMobile] = useState(false);
    const [employees, setEmployees] = useState([]);
    // const [filteredNames, setFilteredNames] = useState(allEmployees);
    const [filteredNames, setFilteredNames] = useState([]);


    const {state} = useLocation();
    const { branchInfo } = state || {};

    useEffect(() => {
            const updateViewport = () => {
                setIsMobile(window.innerWidth <= 768);
            }

            updateViewport();

            window.addEventListener('resize', updateViewport);

            function getInformation(branchInfo)
            {
                const eList = []
                for (const [key, value] of Object.entries(branchInfo)) {
                    value.expand.employees.forEach((element) => {
                        element["role"] = value.role;
                        element["jobType"] = value.employmentType;
                        eList.push(element);
                    });
                }

                setEmployees(eList);
                setFilteredNames(eList);
            }

            if (branchInfo) {
                getInformation(branchInfo);
            }

            return () => {
                window.removeEventListener('resize', updateViewport);
            }
        }, [branchInfo]);

    const handleLetterClick = (letter) => {
        setLetterFilter(letter)
        
        if (letter === 'All') {
            // setFilteredNames(allEmployees);
            setFilteredNames(employees);
        }
        else {
            // const filteredEmployees = allEmployees.filter((person) => {
            const filteredEmployees = employees.filter((person) => {
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
        // const filteredEmployees = allEmployees.filter((person) => {
        const filteredEmployees = employees.filter((person) => {
            return (person.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            (person.lastName.toLowerCase().includes(event.target.value.toLowerCase())));
        });
        setFilteredNames(filteredEmployees);
    }

    const branchName = branchInfo[0].address.split(',');
    console.log(employees);
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
                                {/*<BranchHeader>{branch1.name} • {branch1.city}, {branch1.province}</BranchHeader>*/}
                                <BranchHeader>{branchName[0]} • {branchName[1]}, {branchName[2].split(' ')[1]}</BranchHeader>
                                {/*{!isMobile ? <TagCounter>{allEmployees.length} Employees</TagCounter> : null}*/}
                                {!isMobile ? <TagCounter>{employees.length} Employees</TagCounter> : null}
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