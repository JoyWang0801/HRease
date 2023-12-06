import React, { useState, useEffect } from "react";
import PersonalInformationForm from "../components/PersonalInformationForm";
import ContactInformationForm from "../components/ContactInformationForm";
import NavBar from "../components/NavBar";
import pb from "../lib/pocketbase";
import { GreenHeaderContainer, MainContentContainer, PageContainer } from "../components/styles/Containers";
import { EmployeeHeader, EmployeeHeaderContainer, EmployeeInformationContainer, EmployeePosition, InformationWrapper, ProfilePicture } from "../components/styles/EmployeeView.styled";
import { useParams } from "react-router-dom";

pb.autoCancellation(false)

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [dependentData, setDependentData] = useState("");
  const [branchData, setBranchData] = useState('');
  const [employeeID, setEmployeeID] = useState(null);
  const params = useParams().id;
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    const fetchEmployeeID = async () => {
      try {
        // Check if userID is already available from params
        if (params) {
          setEmployeeID(params);
        } else {
          // Fetch the employee ID from the collection
          const response = await pb.collection("employee").getFirstListItem('loginInfo="' + userID + '"');
          if (response && response.id) {
            setEmployeeID(response.id);
          } else {
            throw new Error("Employee ID not found");
          }
        }
      } catch (error) {
        console.error("Error fetching employee ID:", error);
      }
    };

    fetchEmployeeID();
  }, [userID, params]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (employeeID) {
          const employeeData = await pb.collection("employee").getOne(employeeID);
          setEmployeeData(employeeData);
          setProfileImageUrl(pb.files.getUrl(employeeData, employeeData.avatar));
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [employeeID]);

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
              {/* <EmployeePosition>{branchData.}</EmployeePosition> */}
              <EmployeePosition>{employeeData.employment_type}</EmployeePosition>
              <EmployeePosition>{!employeeData.isManager ? "Employee" : "Manager"}</EmployeePosition>
            </EmployeeHeaderContainer>
          </EmployeeInformationContainer>
        </GreenHeaderContainer>
        <InformationWrapper>
          <PersonalInformationForm formData={employeeData} />
          <ContactInformationForm formData={employeeData} />
        </InformationWrapper>
      </MainContentContainer>
    </PageContainer>
  );
};

export default EmployeeProfile;
