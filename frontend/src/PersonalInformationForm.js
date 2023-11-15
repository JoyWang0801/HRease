import React from 'react';
import { Box, TextField, Grid, Typography, CardContent } from '@mui/material';

const PersonalInformationForm = ({ formData }) => {
  const cardStyle = {
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
      <Box component="form" noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="fullName"
            label="Full Name"
            value={`${formData.first_name || ''} ${formData.last_name || ''}`}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="address"
            label="Address"
            value={formData.home_address || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="dob"
            label="Date of Birth"
            value={formData.birthday || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="gender"
            label="Gender"
            value={formData.gender || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="city"
            label="City"
            value={formData.city || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="province"
            label="Province"
            value={formData.province || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="postalCode"
            label="Postal Code"
            value={formData.postal_code || ''}
            InputLabelProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
      </CardContent>
    </Card>
  );
};

export default PersonalInformationForm;
