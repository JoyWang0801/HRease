import React from 'react';
import { Card, Box, TextField, Grid, Typography, CardContent } from '@mui/material';
import { CardHeader, FourGrid, FullHolder, HalfHolder, InformationContainer, InformationMatrix } from './styles/InformationCard';

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
        {/* <FullHolder>{formData.firstName} {formData.lastName}</FullHolder> */}
        <FullHolder>John Adams</FullHolder>
        {/* <FullHolder>{formData.address}</FullHolder> */}
        <FullHolder>123, Cornelia Street NE, T2T 1K8</FullHolder>
        <FourGrid>
          {/* <HalfHolder>{formData.city}</HalfHolder> */}
          <HalfHolder>Calgary</HalfHolder>
          {/* <HalfHolder>{formData.province}</HalfHolder> */}
          <HalfHolder>Alberta</HalfHolder>
          {/* <HalfHolder>{formData.dateOfBirth}</HalfHolder> */}
          <HalfHolder>01-23-1997</HalfHolder>
          {/* <HalfHolder>{formData.gender}</HalfHolder> */}
          <HalfHolder>Male</HalfHolder>
        </FourGrid>
      </InformationMatrix>
    </InformationContainer>
  );
};

export default PersonalInformationForm;
