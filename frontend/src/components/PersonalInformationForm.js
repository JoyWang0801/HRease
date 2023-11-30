import React from 'react';
import { Card, Box, TextField, Grid, Typography, CardContent } from '@mui/material';

const PersonalInformationForm = ({ formData }) => {
  const cardStyle = {
    borderRadius: "15px",
    padding: "24px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Box component="form" noValidate autoComplete="off">
          <Typography sx={{ fontSize: 30, fontWeight: '600' }} gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="fullName"
                label="Full Name"
                value={`${formData.firstName || ''} ${formData.lastName || ''}`}
                InputLabelProps={{
                  readOnly: true,
                }}
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address"
                label="Address"
                value={formData.address || ''}
                InputLabelProps={{
                  readOnly: true,
                }}
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="dob"
                label="Date of Birth"
                value={formData.dateOfBirth || ''}
                InputLabelProps={{
                  readOnly: true,
                }}
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
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
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
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
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
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
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="postalCode"
                label="Postal Code"
                value={formData.postalCode || ''}
                InputLabelProps={{
                  readOnly: true,
                }}
                InputProps={{
                  style: { fontSize: '25px' },
                  readOnly: true,
                }}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '& fieldset': {
                      borderColor: '#6EB38E',
                    },
                  },
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
