import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Container, Box, Paper, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import PersonalInformationForm from './PersonalInformationForm';

const pb = new PocketBase('http://localhost:8080'); // Replace with your PocketBase server URL
pb.autoCancellation(false);

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('employees').getOne('alqpm56ja6arfd0');
        setEmployeeData(record);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} sm={4} md={3}>
            <Paper elevation={3}>
              <Sidebar />
            </Paper>
          </Grid>
          {/* Main content */}
          <Grid item xs={12} sm={8} md={9}>
            <Paper elevation={3}>
              <ProfileCard
                first_name={employeeData.first_name || ''}
                last_name={employeeData.last_name || ''}
                role={employeeData.role || ''}
                employment_type={employeeData.employment_type || ''}
              />
              <PersonalInformationForm formData={employeeData} />
              {/* ContactInformationForm will go here */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EmployeeProfile;
