import React, { useState, useEffect } from "react"
import { Card, EmployeeFirstName, EmployeeLastName, InfoLeft, InfoRight, NameContainer, PositonType, ProfilePicture } from "./styles/EmployeeCard.styled"
import pb from '../lib/pocketbase';

function EmployeeCard( {employee} ) {
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
        <Card>
            <InfoLeft>
                <NameContainer>
                    <EmployeeFirstName>{employee.firstName}</EmployeeFirstName>
                    <EmployeeLastName>{employee.lastName}</EmployeeLastName>
                </NameContainer>
                {
                    !isMobile ? <PositonType>{employee.role} • {employee.jobType}</PositonType> : null
                }
            </InfoLeft>
            <InfoRight>
                {
                    !isMobile ? <ProfilePicture src={pb.files.getUrl(employee, employee.avatar)}/> : <PositonType>{employee.role} • {employee.jobType}</PositonType>
                }
            </InfoRight>
        </Card>
    )
}

export default EmployeeCard