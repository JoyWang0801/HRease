import React, {useEffect, useState} from 'react';
import {Box, Button, Card, Container, Paper, styled, Typography} from '@mui/material';
import pb from "../lib/pocketbase";
import Grid from "@mui/material/Grid";
import '../style/digital-clock.css'
import Sidebar from "../components/Sidebar";

const BranchView =  () => {
    // let key = localStorage.getItem('authToken');
    // console.log(key);

    let currentdate = new Date();

    async function clockIn() {
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        const data = {
            "clockIn": currentdate,
            "clockPut": currentdate,
        };
        let fmrDate = new Intl.DateTimeFormat().format(currentdate);
            console.log(`Date: ${Date}, fmtDate: ${fmrDate}`);
        const record = await pb.collection('attendance').create(data);
    }

    const [currentTime, setTime] = useState
    ({
            minutes: currentdate.getMinutes(),
            hours: currentdate.getHours(),
            seconds: currentdate.getSeconds()
        }
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            currentdate = new Date();
            setTime({
                minutes: currentdate.getMinutes(),
                hours: currentdate.getHours(),
                seconds: currentdate.getSeconds()
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container disableGutters maxWidth={false}>
            {/*<Box mt={0} mb={4}>*/}
                <Grid container spacing={3}>
                    {/* Sidebar */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Sidebar />
                    </Grid>
                    {/* Main content */}
                    <Grid item xs={12} sm={8} md={9} container spacing={3}>
                        <Grid>
                            <p > {`${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`}</p>
                            <Button variant="contained" onClick={clockIn}>
                                ClockIn
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

export default BranchView;
