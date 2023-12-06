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
          123, Cornelia Street NE, T2T 1K8
          {/* {formData.address} */}
        </FullHolder>
        <FourGrid>
          <HalfHolder>
            <Legend>City</Legend>
            Calgary
            {/* {formData.city} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>Province</Legend>
            Alberta
            {/* {formData.province} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>DOB</Legend>
            01-23-1997
            {/* {formData.dateOfBirth} */}
          </HalfHolder>
          <HalfHolder>
            <Legend>Gender</Legend>
            Male
            {/* {formData.gender} */}
          </HalfHolder>
        </FourGrid>
      </InformationMatrix>
    </InformationContainer>
  );
};

export default PersonalInformationForm;
