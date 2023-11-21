import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Container, Box, Paper, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import PersonalInformationForm from './PersonalInformationForm';
import ContactInformationForm from './ContactInformationForm';

const pb = new PocketBase('http://localhost:8080');
pb.autoCancellation(false);

const EmployeeProfile = () => {

  return (
    <Container disableGutters maxWidth={false}>
      <Box mt={0} mb={4}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} sm={4} md={3}>
            <Sidebar />
          </Grid>
          {/* Main content */}
          <Grid item xs={12} sm={8} md={9} container spacing={3}>
            <Box display="flex" flexDirection="column" height="100%">
              <ProfileCard
                first_name={employeeData.first_name || ''}
                last_name={employeeData.last_name || ''}
                role={employeeData.role || ''}
                employment_type={employeeData.employment_type || ''}
              />
              {/* Forms container */}
              <Box display="flex" justifyContent="space-between" p={2} sx={{ gap: '16px'}}>
                <Box flex={1} sx={{ mr: 2, mb: 2 }}>
                  <PersonalInformationForm formData={employeeData} />
                </Box>
                <Box flex={1} sx={{ ml: 2, mt: 2 }}>
                  <ContactInformationForm formData={employeeData} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EmployeeProfile;
