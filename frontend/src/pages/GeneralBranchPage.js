import React, { useState, useEffect } from 'react'
import { GreenHeaderContainer, MainContentContainer, PageContainer, ContentContainer, ContentWrapper, OuterContentContainer } from '../components/styles/Containers'
import NavBar from '../components/NavBar'
import { BranchHeader, HeaderMatrix, TagCounter } from '../components/styles/BranchGlobals'
import { GeneralBranchHeaderContainer, BranchCardContainer } from '../components/styles/GeneralBranchPage.styled'
import SearchBar from '../components/SearchBar'
import AlphabetBar from '../components/AlphabetBar'
import AlphabetHeader from '../components/AlphabetHeader'
import BranchCard from '../components/BranchCard'

const branch1 = {
    name: "Aspen",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}

const branch2 = {
    name: "Brentwood",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}

const branch3 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}

const branch4 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
const branch5 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
const branch6 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
const branch7 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
const branch8 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
const branch9 = {
    name: "Varsity",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    size: 61
}
let allBranches = [branch1, branch2, branch3, branch4, branch5, branch6, branch7, branch8, branch9];

function GeneralBranchPage() {
    const [filteredBranches, setFilteredBranches] = useState(allBranches);
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
            setFilteredBranches(allBranches);
        }
        else {
            const filteredBranch = allBranches.filter((branch) => {
                const firstLetterBranch= branch.name.charAt(0).toUpperCase();
                return firstLetterBranch === letter;
            });
            console.log(filteredBranch);
            console.log(`Clicking from branch ${letter}`);
            setFilteredBranches(filteredBranch);
        }
    }

    const handleSearchChange = (event) => {
        console.log(event.target.value);
        const filteredBranches = allBranches.filter((branch) => {
            return branch.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFilteredBranches(filteredBranches);
    }

    return (
        <PageContainer>
            <NavBar />
            <MainContentContainer>
                <GreenHeaderContainer>
                    <GeneralBranchHeaderContainer>
                        <HeaderMatrix>
                            <BranchHeader>Branches</BranchHeader>
                            {!isMobile ? <TagCounter>12 Branches</TagCounter> : null}
                        </HeaderMatrix>
                        {!isMobile ? <AlphabetBar onLetterClick={handleLetterClick}/> : <SearchBar handleSearchChange={handleSearchChange}/>}
                    </GeneralBranchHeaderContainer>
                </GreenHeaderContainer>
                <OuterContentContainer>
                    <ContentContainer>
                        { 
                            isMobile
                            ? 
                            null
                            :
                            <ContentWrapper>
                                <SearchBar handleSearchChange={handleSearchChange}/>
                            </ContentWrapper>
                        }
                        <ContentWrapper>
                            <HeaderMatrix>
                                <AlphabetHeader letter={letterFilter} />
                            </HeaderMatrix>
                            <BranchCardContainer>
                                {filteredBranches.map((branch, i) => (
                                    <BranchCard key={i} branch={branch} />
                                ))}
                            </BranchCardContainer>
                        </ContentWrapper>
                    </ContentContainer>
                    {isMobile ? <AlphabetBar onLetterClick={handleLetterClick}/> : null}
                </OuterContentContainer>
            </MainContentContainer>
        </PageContainer>
    )
}


export default GeneralBranchPage