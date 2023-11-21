import React from "react"
import { Card, EmployeeFirstName, EmployeeLastName, InfoLeft, InfoRight, NameContainer, PositonType, ProfilePicture } from "./styles/EmployeeCard.styled"

function EmployeeCard( {employee} ) {
    return (
        <Card>
            <InfoLeft>
                <NameContainer>
                    <EmployeeFirstName>{employee.firstName}</EmployeeFirstName>
                    <EmployeeLastName>{employee.lastName}</EmployeeLastName>
                </NameContainer>
                <PositonType>{employee.position} • {employee.jobType}</PositonType>
            </InfoLeft>
            <InfoRight>
                <ProfilePicture src={employee.picture}/>
            </InfoRight>
        </Card>
    )
}

export default EmployeeCard