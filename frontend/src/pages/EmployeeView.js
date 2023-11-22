import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import PersonalInformationForm from '../components/PersonalInformationForm';
import ContactInformationForm from '../components/ContactInformationForm';
import pb from "../lib/pocketbase";

pb.autoCancellation(false);

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('employee').getOne('l7t4rmttf39l8tk');
        setEmployeeData(record);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

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
