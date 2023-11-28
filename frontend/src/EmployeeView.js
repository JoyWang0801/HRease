import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Avatar } from '@mui/material';
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import PersonalInformationForm from './PersonalInformationForm';
import ContactInformationForm from './ContactInformationForm';
import pb from "./lib/pocketbase";

pb.autoCancellation(false);

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [dependentData, setDependentData] = useState('');
  const [branchData, setBranchData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('employee').getOne('bj0kqv9203o0wdv');
        setEmployeeData(record);

        const url = pb.files.getUrl(record, record.avatar);
        setProfileImageUrl(url);

        const dependent = await pb.collection('dependent').getOne(record.dependent);
        setDependentData(dependent);

        const branch = await pb.collection('branch').getList(1, 10, {
          filter: 'employees ~ "bj0kqv9203o0wdv"',
        });
        console.log(branch);
        setBranchData(branch);
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
                first_name={employeeData.firstName || ''}
                last_name={employeeData.lastName || ''}
                role={employeeData.role || ''}
                employment_type={employeeData.employment_type || ''}
                imageUrl={profileImageUrl || ''}
              />
              {/* Forms container */}
              <Box display="flex" justifyContent="space-between" p={2} sx={{ gap: '16px' }}>
                <Box flex={1} sx={{ mr: 2, mb: 2 }}>
                  <PersonalInformationForm formData={employeeData} />
                </Box>
                <Box flex={1} sx={{ ml: 2, mt: 2 }}>
                  <ContactInformationForm formData={employeeData} dependentData={dependentData} />
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
