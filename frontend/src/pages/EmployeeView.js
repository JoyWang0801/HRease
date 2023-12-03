import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Avatar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import PersonalInformationForm from "../components/PersonalInformationForm";
import ContactInformationForm from "../components/ContactInformationForm";
import NavBar from "../components/NavBar";
import pb from "../lib/pocketbase";
import { CardContainer, GreenHeaderContainer, MainContentContainer, PageContainer } from "../components/styles/Containers";
import { BranchHeaderContainer } from "../components/styles/BranchGlobals";
import { EmployeeHeader, EmployeeHeaderContainer, EmployeeInformationContainer, EmployeePosition, InformationWrapper, ProfilePicture } from "../components/styles/EmployeeView.styled";
import profilePic from "../assets/john-adams.png"


pb.autoCancellation(false);

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [dependentData, setDependentData] = useState("");
  const [branchData, setBranchData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb
          .collection("employee")
          .getOne("bj0kqv9203o0wdv");
        setEmployeeData(record);

        const url = pb.files.getUrl(record, record.avatar);
        setProfileImageUrl(url);

        const dependent = await pb
          .collection("dependent")
          .getOne(record.dependent);
        setDependentData(dependent);

        const branch = await pb.collection("branch").getList(1, 1, {
          filter: 'employees ~ "bj0kqv9203o0wdv"',
        });
        setBranchData(branch);
        console.log(branchData.items[0].employmentType);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
      <NavBar />
      <MainContentContainer>
        <GreenHeaderContainer>
          <EmployeeInformationContainer>
            {/* <ProfilePicture src={profileImageUrl}></ProfilePicture> */}
            <ProfilePicture src={profilePic}></ProfilePicture>
            <EmployeeHeaderContainer>
              {/* <EmployeeHeader>{employeeData.firstName} {employeeData.lastName}</EmployeeHeader> */} 
              <EmployeeHeader>John Adams</EmployeeHeader>
              {/* <EmployeePosition>{branchData.items?.[0]?.role} • {branchData.items?.[0]?.employmentType}</EmployeePosition> */}
              <EmployeePosition>Manager • Full-time</EmployeePosition>
            </EmployeeHeaderContainer>
          </EmployeeInformationContainer>
        </GreenHeaderContainer>
        <InformationWrapper>
          <PersonalInformationForm />
          <ContactInformationForm />
        </InformationWrapper>
      </MainContentContainer>
    </PageContainer>

    // <Container disableGutters maxWidth={false}>
    //   <Box mt={0} mb={4}>
    //     <Grid container spacing={3}>
    //       {/* Sidebar */}
    //       <Grid item xs={12} sm={4} md={3}>
    //         <NavBar />
    //       </Grid>
    //       {/* Main content */}
    //       <Grid item xs={12} sm={8} md={9} container spacing={3}>
    //         <Box display="flex" flexDirection="column" height="100%">
    //           <ProfileCard
    //             first_name={employeeData.firstName || ""}
    //             last_name={employeeData.lastName || ""}
    //             role={branchData.items?.[0]?.role || ""}
    //             employment_type={branchData.items?.[0]?.employmentType || ""}
    //             imageUrl={profileImageUrl || ""}
    //           />
    //           {/* Forms container */}
    //           <Grid container spacing={2}>
    //             <Grid item xs={12} sm={6}>
    //               <PersonalInformationForm formData={employeeData} />
    //             </Grid>
    //             <Grid item xs={12} sm={6}>
    //               <ContactInformationForm
    //                 formData={employeeData}
    //                 dependentData={dependentData}
    //               />
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Container>
  );
};

export default EmployeeProfile;
