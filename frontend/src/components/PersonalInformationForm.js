import React from 'react';
import { Card, Box, TextField, Grid, Typography, CardContent } from '@mui/material';
import { CardHeader, FourGrid, FullHolder, HalfHolder, InformationContainer, InformationMatrix, Legend } from './styles/InformationCard';

const PersonalInformationForm = ({ formData }) => {
  // const cardStyle = {
  //   borderRadius: "15px",
  //   padding: "24px",
  //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  // };

  return (
    <InformationContainer>
      <InformationMatrix>
        <CardHeader>Personal Information</CardHeader>
        <FullHolder>
          <Legend>Name</Legend>
          John Adams
          {/* {formData.firstName} {formData.lastName} */}
        </FullHolder>
        <FullHolder>
          <Legend>Address</Legend>
          {formData.address}
          {/* {formData.address} */}
        </FullHolder>
        <FourGrid>
          <HalfHolder>
            <Legend>City</Legend>
            {formData.city}
            {/* {formData.city} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>Province</Legend>
            {formData.province}
            {/* {formData.province} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>DOB</Legend>
            {formData.dateOfBirth}
            {/* {formData.dateOfBirth} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>Gender</Legend>
            {formData.gender}
            {/* {formData.gender} */}
          </HalfHolder>
        </FourGrid>
      </InformationMatrix>
    </InformationContainer>
  );
};

export default PersonalInformationForm;
