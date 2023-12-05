import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Container, Paper, styled, Typography } from '@mui/material';
import pb from "../lib/pocketbase";
import Grid from "@mui/material/Grid";
import '../components/styles/digital-clock.css'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
// import DigitalClock from "../components/DigitalClock";


const PersonalView = () => {
    const [clockedIn, setClockedIn] = useState(false);
    const [clockInRecord, setClockInRecord] = useState();
    let key = localStorage.getItem('authToken');
    let currentTime = new Date();
    // console.log(pb.authStore.model.email)


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

    return (
        <Container disableGutters maxWidth={false}>
            {/*<Box mt={0} mb={4}>*/}
                <Grid container spacing={3}>
                    {/* Sidebar */}
                    <Grid item xs={12} sm={4} md={3}>
                        <NavBar />
                    </Grid>
                    {/* Main content */}
                    <Grid item xs={12} sm={8} md={9} container spacing={3}>
                        <Grid>
                            {/*<DigitalClock/>*/}
                            <Button variant="contained" onClick={punchClock}>
                                {clockedIn === true ? "ClockOut" : "ClockIn"}
                            </Button>
                        </Grid>
                        <Grid sx={{
                            width: "100%",
                            height: "30vh",
                            borderRadius: 5,
                            bgcolor: 'primary.main',

                        // '&:hover': {
                        //     bgcolor: 'primary.dark',
                        // },
                    }}>
                    </Grid>
                </Grid>
            </Grid>
            {/*</Box>*/}
        </Container>
    );
};

// SELECT columns at somewhere else for displaying necessary information only
// Having a separate collections to handle attendance ( will also need to think about branch

export default PersonalView;
