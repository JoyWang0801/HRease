import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Avatar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import PersonalInformationForm from "../components/PersonalInformationForm";
import ContactInformationForm from "../components/ContactInformationForm";
import NavBar from "../components/NavBar";
import pb from "../lib/pocketbase";


pb.autoCancellation(false);

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [dependentData, setDependentData] = useState("");
  const [branchData, setBranchData] = useState({ items: [] });
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const IDResponse = await pb.collection("employee").getList(1, 1, {
          filter: `loginInfo ~ "${userID}"`,
        });
  
        const employeeID = IDResponse.items[0]?.id;
        if (!employeeID) {
          throw new Error("Employee ID not found");
        }
  
        const employeeData = await pb.collection("employee").getOne(employeeID);
        setEmployeeData(employeeData);
  
        const url = pb.files.getUrl(employeeData, employeeData.avatar);
        setProfileImageUrl(url);
  
        const dependent = await pb.collection("dependent").getOne(employeeData.dependent);
        setDependentData(dependent);
  
        const branch = await pb.collection("branch").getList(1, 1, {
          filter: `employees ~ "${employeeID}"`,
        });
        setBranchData(branch);
  
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
  
    fetchData();
  }, [userID]);  

  return (
    <Container disableGutters maxWidth={false}>
      <Box mt={0} mb={4}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} sm={4} md={3}>
            <NavBar />
          </Grid>
          {/* Main content */}
          <Grid item xs={12} sm={8} md={9} container spacing={3}>
            <Box display="flex" flexDirection="column" height="100%">
              <ProfileCard
                first_name={employeeData.firstName || ""}
                last_name={employeeData.lastName || ""}
                role={branchData.items?.[0]?.role || ""}
                employment_type={branchData.items?.[0]?.employmentType || ""}
                imageUrl={profileImageUrl || ""}
              />
              {/* Forms container */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <PersonalInformationForm formData={employeeData} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ContactInformationForm
                    formData={employeeData}
                    dependentData={dependentData}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EmployeeProfile;
