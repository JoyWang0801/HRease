import React from 'react';
import { Card, CardContent, Box, TextField, Grid, Typography } from '@mui/material';
import { CardHeader, FourGrid, FullHolder, HalfHolder, InformationContainer, InformationMatrix } from './styles/InformationCard';

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
        {/* <FullHolder>{formData.workEmail}</FullHolder> */}
        <FullHolder>johnadams@gmail.com</FullHolder>
        {/* <FullHolder>{formData.phoneNumber}</FullHolder> */}
        <FullHolder>123-123-1234</FullHolder>
        <CardHeader>Emergency Contact</CardHeader>
        {/* <FullHolder>{dependentData.fullName}</FullHolder> */}
        <FullHolder>Jane Adams</FullHolder>
        {/* <FullHolder>{dependentData.phoneNumber}</FullHolder> */}
        <FullHolder>123-321-4321</FullHolder>
      </InformationMatrix>
    </InformationContainer>
  );
};

export default ContactInformationForm;
