import React from 'react';
import { Card, CardContent, Box, TextField, Grid, Typography } from '@mui/material';
import { CardHeader, FourGrid, FullHolder, HalfHolder, InformationContainer, InformationMatrix, Legend } from './styles/InformationCard';

const ContactInformationForm = ({ formData, dependentData }) => {
  const cardStyle = {
    borderRadius: "15px",
    padding: "24px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <InformationContainer>
      <InformationMatrix>
        <CardHeader>Contact Information</CardHeader>
        <FullHolder>
          <Legend>Email</Legend>
          {/* johnadams@gmail.com */}
          {formData.workEmail}
        </FullHolder>
        <FullHolder>
          <Legend>Phone Number</Legend>
          {/* 123-123-1234 */}
          {formData.phoneNumber}
        </FullHolder>
        <CardHeader>Emergency Contact</CardHeader>
        <FullHolder>
          <Legend>Dependant Name</Legend>
          {/* Jane Adams */}
          {dependentData.fullName}
        </FullHolder>
        <FullHolder>
          <Legend>Dependent Phone Number</Legend>
          {/* 123-321-4321 */}
          {dependentData.phoneNumber}
        </FullHolder>
      </InformationMatrix>
    </InformationContainer>
  );
};

export default ContactInformationForm;
