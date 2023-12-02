import React, {useEffect, useState} from 'react';
import {Box, Button, Card, Container, Paper, styled, Typography} from '@mui/material';
import pb from "../lib/pocketbase";
import Grid from "@mui/material/Grid";
import '../components/styles/digital-clock.css'
import Sidebar from "../components/Sidebar";
import DigitalClock from "../components/DigitalClock";
import NavBar from "../components/NavBar";
import {HeaderInfo, PersonalProfile} from "../components/PersonalViewComponents";

// Will need to resolve data fetching
const PersonalView =  () => {
    const [clockedIn, setClockedIn] = useState(false);
    const [clockInRecord, setClockInRecord] = useState();
    let key = localStorage.getItem('authToken');
    let currentTime = new Date();
    console.log(pb.authStore.model.email)

    const [employeeData, setEmployeeData] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [dependentData, setDependentData] = useState("");
    const [branchData, setBranchData] = useState({ items: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                let userEmployeeId = JSON.parse(localStorage.getItem("userRecord")).employee;

                const record = await pb
                    .collection("employee")
                    .getOne(userEmployeeId);
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

    // async function punchClock() {
    //     let datetime = "Last Sync: " + currentTime.getDate() + "/"
    //         + (currentTime.getMonth() + 1) + "/"
    //         + currentTime.getFullYear() + " @ "
    //         + currentTime.getHours() + ":"
    //         + currentTime.getMinutes() + ":"
    //         + currentTime.getSeconds();

    //     const employeeRecord = await pb.collection('employee').getFirstListItem(`workEmail="${pb.authStore.model.email}"`);

    //    if(!clockedIn)
    //    {
    //        const fakeDate = new Date(2012, 5, 1,2,3,4);
    //        const data = {
    //            "clockIn": currentTime,
    //            "employee": employeeRecord.id
    //        };
    //        let fmrDate = new Intl.DateTimeFormat().format(currentTime);
    //        console.log(`Date: ${currentTime}, UTC: ${currentTime.toUTCString()}, fmtDate: ${fmrDate}`);
    //        setClockInRecord(await pb.collection('attendance').create(data));
    //    }
    //    else
    //    {
    //        const fakeDate = new Date(2022, 5, 1,3,4,5);
    //        const updateData = {
    //            "clockOut": currentTime
    //        };
    //        const record = await pb.collection('attendance').update(clockInRecord.id, updateData);
    //    }

    //     setClockedIn(!clockedIn);
    // }

    return (
                <Grid container spacing={3}>
                    {/* Sidebar */}
                    <Grid item xs={12} sm={4} md={3}>
                        <NavBar />
                    </Grid>
                    {/* Main content */}
                    <Grid item xs={12} sm={8} md={9} container spacing={3} paddingRight={"2vw"}>
                        <Grid item container alignItems="center" maxHeight="30vh" marginTop={"2vh"} >
                            <PersonalProfile first_name={employeeData.firstName || ""}
                                             last_name={employeeData.lastName || ""}
                                             role={branchData.items?.[0]?.role || ""}
                                             employment_type={branchData.items?.[0]?.employmentType || ""}
                                             imageUrl={profileImageUrl || ""}
                            />
                            <HeaderInfo/>
                        </Grid>
                        <Grid item container sx={{mt:'2vh', borderRadius: 5, bgcolor: 'primary.main'}}>
                            <Grid item xs={12} sm={6} md={3} container alignItems="center" justifyContent="center">
                                <DigitalClock/>
                                <Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button><Button variant="contained" size="large">
                                    Request Time Off
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
    );
};

// SELECT columns at somewhere else for displaying necessary information only
// Having a separate collections to handle attendance ( will also need to think about branch

export default PersonalView;
