import { BranchCardContainer, BranchLeft, BranchLocation, BranchName, BranchRight } from "./styles/BranchCard.styled"
import { useState, useEffect } from "react";
import { TagCounter } from "./styles/BranchGlobals";

function BranchCard( {branch} ) {
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

    return (
        <BranchCardContainer>
            <BranchLeft>
                <BranchName>{branch.name}</BranchName>
                {
                    !isMobile ? <BranchLocation>{branch.city}, {branch.province} • {branch.country} </BranchLocation> : null
                }
            </BranchLeft>
            <BranchRight>
                <TagCounter>{branch.size} employees</TagCounter>
            </BranchRight>
        </BranchCardContainer>
    )
}

export default BranchCard