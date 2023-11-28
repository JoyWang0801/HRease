import React from 'react';
import { Card, CardContent, Box, TextField, Grid, Typography } from '@mui/material';

const ContactInformationForm = ({ formData, dependentData }) => {
  const cardStyle = {
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Box component="form" noValidate autoComplete="off">
          <Typography sx={{ fontSize: 30, fontWeight: '600' }} gutterBottom>
            Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                value={formData.workEmail || ''}
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
                id="phone"
                label="Phone"
                value={formData.phoneNumber || ''}
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
              <Typography sx={{ fontSize: 30, fontWeight: '600' }} gutterBottom>
                Emergency Contact
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="relationship"
                label="Relationship"
                value={dependentData.relationship || ''}
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
                id="full_name"
                label="Full Name"
                value={dependentData.fullName || ''}
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
                id="emergency_email"
                label="Email"
                value={dependentData.email || ''}
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
                id="emergency_phone"
                label="Phone"
                value={dependentData.phoneNumber || ''}
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

export default ContactInformationForm;
