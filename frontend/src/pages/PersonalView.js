import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Container, Paper, styled, Typography } from '@mui/material';
import pb from "../lib/pocketbase";
import Grid from "@mui/material/Grid";
import '../components/styles/digital-clock.css'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { GreenBox, UL, Label, Info, LI, TopWrapper, ProfileCard, Time, ClockInOutButton, ContainerWrapper, EmployeeName, EmployeePronouns, EmployeeRole, ProfilePic, ProfileCardInfoWrapper } from '../components/styles/PersonalView.style';
// import DigitalClock from "../components/DigitalClock";
import johnPic from '../assets/john-adams.png'
import { useParams } from "react-router-dom";

const PersonalView = () => {
    const [clockedIn, setClockedIn] = useState(false);
    const [clockInRecord, setClockInRecord] = useState();
    let currentTime = new Date();
    const [time, setTime] = useState(`${currentTime.getHours}:${currentTime.getSeconds}`);
    let key = localStorage.getItem('authToken');
    const [employeeData, setEmployeeData] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [userData, setUserData] = useState("");
    const [branchData, setBranchData] = useState("");
    const [employeeID, setEmployeeID] = useState("");

    const params = useParams().id;
    const userID = localStorage.getItem('userID');
    // console.log(pb.authStore.model.email)


    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const min = now.getMinutes();
        setTime(`${hours}:${min}`);
    }, 1000)


    async function punchClock() {
        let datetime = "Last Sync: " + currentTime.getDate() + "/"
            + (currentTime.getMonth() + 1) + "/"
            + currentTime.getFullYear() + " @ "
            + currentTime.getHours() + ":"
            + currentTime.getMinutes() + ":"
            + currentTime.getSeconds();

        const employeeRecord = await pb.collection('employee').getFirstListItem(`workEmail="${pb.authStore.model.email}"`);

        if (!clockedIn) {
            const fakeDate = new Date(2012, 5, 1, 2, 3, 4);
            const data = {
                "clockIn": currentTime,
                "employee": employeeRecord.id
            };
            let fmrDate = new Intl.DateTimeFormat().format(currentTime);
            console.log(`Date: ${currentTime}, UTC: ${currentTime.toUTCString()}, fmtDate: ${fmrDate}`);
            setClockInRecord(await pb.collection('attendance').create(data));
        }
        else {
            const fakeDate = new Date(2022, 5, 1, 3, 4, 5);
            const updateData = {
                "clockOut": currentTime
            };
            const record = await pb.collection('attendance').update(clockInRecord.id, updateData);
        }

        setClockedIn(!clockedIn);
    }

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

    useEffect(() => {
        const fetchBranchInfo = async () => {
            try {
                if (employeeID) {
                    // Assuming you have a relation or a way to link employee to branch
                    const branchRecord = await pb.collection('branch').getFirstListItem(`employees ~ "${employeeID}"`);
                    setBranchData(branchRecord);
                }
            } catch (error) {
                console.error("Error fetching branch data:", error);
            }
        };

        fetchBranchInfo();
    }, [employeeID]);

    useEffect(() => {
        fetchUserData();
    }, [userID]);

    const fetchUserData = async () => {
        if (!userID) {
            console.log("No userID available");
            return;
        }
        try {
            const userData = await pb.collection('users').getOne(userID);
            setUserData(userData);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <Container disableGutters maxWidth={false}>
            <Box mt={0} mb={4}>
                <Grid container spacing={3}>
                    {/* Sidebar */}
                    <Grid item xs={12} sm={4} md={3}>
                        <NavBar />
                    </Grid>
                    {/* Main content */}
                    <ContainerWrapper>
                        <TopWrapper>
                            <ProfileCard>
                                <ProfilePic src={profileImageUrl} alt='' />
                                <ProfileCardInfoWrapper>
                                    <EmployeeName>{employeeData.firstName} {employeeData.lastName}</EmployeeName>
                                    <EmployeeRole><strong>{!employeeData.isManager ? "Employee" : "Manager"} </strong>• {employeeData.employment_type}</EmployeeRole>
                                    {/* <EmployeePronouns>They/Them</EmployeePronouns> */}
                                </ProfileCardInfoWrapper>
                            </ProfileCard>
                            <Time>{time}</Time>
                            <ClockInOutButton onClick={punchClock} clockIn={clockedIn}>{clockedIn ? 'Clock Out' : 'Clock In'}</ClockInOutButton>
                        </TopWrapper>
                        <GreenBox>
                            <UL>
                                <LI>
                                    <Label>Username:</Label>
                                    <Info>{userData.username || ''}</Info>
                                </LI>
                                {/* <LI>
                                    <Label>Password:</Label>
                                    <Info>Info</Info>
                                </LI>
                                <LI>
                                    <Label>2FA:</Label>
                                    <Info>Info</Info> */}
                                {/* </LI> */}
                                <LI>
                                    <Label>Work Email:</Label>
                                    <Info>{employeeData.workEmail}</Info>
                                </LI>
                                <LI>
                                    <Label>Branch Address:</Label>
                                    <Info>{branchData.address}</Info>
                                </LI>
                            </UL>
                        </GreenBox>
                    </ContainerWrapper>
                </Grid>
            </Box>
        </Container>
    );
};

// SELECT columns at somewhere else for displaying necessary information only
// Having a separate collections to handle attendance ( will also need to think about branch

export default PersonalView;
