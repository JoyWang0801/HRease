import React, { useState } from 'react';
import {Button, Container, Paper} from '@mui/material';
import pb from "./lib/pocketbase";
import Grid from "@mui/material/Grid";

const BranchView =  () => {
    let key = localStorage.getItem('authToken');
    console.log(key);

    //let userinfo =
    async function clockIn() {
        var currentdate = new Date();
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

        const record = await pb.collection('attendance').create(data);
    }

    return (
        <Container >
            <Grid>
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
        </Container>
    );
};

// SELECT columns at somewhere else for displaying necessary information only
// Having a separate collections to handle attendance ( will also need to think about branch

export default BranchView;
