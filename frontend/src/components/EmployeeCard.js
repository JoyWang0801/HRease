import React, { useState, useEffect } from "react"
import { Card, EmployeeFirstName, EmployeeLastName, InfoLeft, InfoRight, NameContainer, PositonType, ProfilePicture } from "./styles/EmployeeCard.styled"
import pb from '../lib/pocketbase';
import defaultPFP from "../assets/default-profile.png";

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

    let pfp = !pb.files.getUrl(employee, employee.avatar) ? defaultPFP : pb.files.getUrl(employee, employee.avatar);

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
                    !isMobile ? <ProfilePicture src={pfp}/> : <PositonType>{employee.role} • {employee.jobType}</PositonType>
                }
            </InfoRight>
        </Card>
    )
}

export default EmployeeCard