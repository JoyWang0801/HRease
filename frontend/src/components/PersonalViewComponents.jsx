import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, Card, CardContent, Container, Paper, styled, Typography} from '@mui/material';
import pb from "../lib/pocketbase";
import '../components/styles/digital-clock.css'
import DigitalClock from "../components/DigitalClock";
import Grid from "@mui/material/Grid";

const cardStyle = {
    backgroundColor: "primary.main",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const avatarStyle = {
    width: '25vh',
    height: '25vh',
    border:10,
    borderColor: 'primary.main'
};

// const Role = ({role, type}) =>
// {
//     return();
// }

export const PersonalProfile = ({
                         first_name,
                         last_name,
                         role,
                         employment_type,
                         imageUrl,
                     }) => {

    return (
        <>
            <Grid item xs>
                <Avatar
                    style={avatarStyle}
                    src={imageUrl}
                    alt={`${first_name} ${last_name}`}
                />
            </Grid>
            <Grid item xs container direction="column" justifyContent="space-evenly" alignItems="flex-start">
                <Typography variant="h4" sx={{ fontSize: 30, fontWeight: "bold" }}>
                    {`${first_name}`}
                </Typography>
                <Box>
                    <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', display: 'inline' }}>
                        {role} &#x2022;
                    </Typography>
                    <Typography variant="subtitle1" component="span" sx={{ display: 'inline', marginLeft: 1 }}>
                        {employment_type}
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export const HeaderInfo = ({
                               first_name,
                               last_name,
                               role,
                               employment_type,
                               imageUrl,
                           }) => {
    const [clockedIn, setClockedIn] = useState(false);
    const [clockInRecord, setClockInRecord] = useState();
    let key = localStorage.getItem('authToken');
    let currentTime = new Date();
    console.log(pb.authStore.model.email)

    // TODO - migrate Digital clock and clockin button into same jsx file
    async function punchClock() {
        let datetime = "Last Sync: " + currentTime.getDate() + "/"
            + (currentTime.getMonth() + 1) + "/"
            + currentTime.getFullYear() + " @ "
            + currentTime.getHours() + ":"
            + currentTime.getMinutes() + ":"
            + currentTime.getSeconds();

        const employeeRecord = await pb.collection('employee').getFirstListItem(`workEmail="${pb.authStore.model.email}"`);

        if(!clockedIn)
        {
            const fakeDate = new Date(2012, 5, 1,2,3,4);
            const data = {
                "clockIn": currentTime,
                "employee": employeeRecord.id
            };
            let fmrDate = new Intl.DateTimeFormat().format(currentTime);
            console.log(`Date: ${currentTime}, UTC: ${currentTime.toUTCString()}, fmtDate: ${fmrDate}`);
            setClockInRecord(await pb.collection('attendance').create(data));
        }
        else
        {
            const fakeDate = new Date(2022, 5, 1,3,4,5);
            const updateData = {
                "clockOut": currentTime
            };
            const record = await pb.collection('attendance').update(clockInRecord.id, updateData);
        }

        setClockedIn(!clockedIn);
    }

    return(
        <>
            <Grid item xs>
                <DigitalClock/>
            </Grid>
            <Grid item xs>
                <Button variant="contained" onClick={punchClock} sx={{width:'15vw', height:'15vw', borderRadius:'20px', fontSize:'3vw', textTransform:'none'}}>
                    {clockedIn === true ? "ClockOut" : "ClockIn"}
                </Button>
            </Grid>
        </>
    );
}

