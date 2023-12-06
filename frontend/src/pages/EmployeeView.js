import React, { useState, useEffect } from "react";
import PersonalInformationForm from "../components/PersonalInformationForm";
import ContactInformationForm from "../components/ContactInformationForm";
import NavBar from "../components/NavBar";
import pb from "../lib/pocketbase";
import {  GreenHeaderContainer, MainContentContainer, PageContainer } from "../components/styles/Containers";
import { EmployeeHeader, EmployeeHeaderContainer, EmployeeInformationContainer, EmployeePosition, InformationWrapper, ProfilePicture } from "../components/styles/EmployeeView.styled";

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
    <PageContainer>
      <NavBar />
      <MainContentContainer>
        <GreenHeaderContainer>
          <EmployeeInformationContainer>
            <ProfilePicture src={profileImageUrl}></ProfilePicture>
            {/* <ProfilePicture src={profilePic}></ProfilePicture> */}
            <EmployeeHeaderContainer>
              <EmployeeHeader>{employeeData.firstName} {employeeData.lastName}</EmployeeHeader> 
              {/* <EmployeeHeader>John Adams</EmployeeHeader> */}
              <EmployeePosition>{branchData.items?.[0]?.role} • {branchData.items?.[0]?.employmentType}</EmployeePosition>
              {/* <EmployeePosition>Manager • Full-time</EmployeePosition> */}
            </EmployeeHeaderContainer>
          </EmployeeInformationContainer>
        </GreenHeaderContainer>
        <InformationWrapper>
          <PersonalInformationForm formData={employeeData}/>
          <ContactInformationForm formData={employeeData} dependentData={dependentData}/>
        </InformationWrapper>
      </MainContentContainer>
    </PageContainer>
  );
};

export default EmployeeProfile;
