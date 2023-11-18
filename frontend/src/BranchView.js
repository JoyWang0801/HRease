import React, { useState } from 'react';
import {Button, TextField, Container, Typography, Box, Paper, Avatar, Card, CardHeader} from '@mui/material';
import pb from "./lib/pocketbase";
import Grid from "@mui/material/Grid";

let resultList = await pb.collection('Branch').getList(1, 50, {
    expand: 'employees',
})
    .then((result) => {
        // success...
        console.log('Result:', result.items);
         return result.items;
    }).catch((error) => {
        // error...
        console.log('Error:', error);
    });

const BranchView =  () => {
    // fetch a paginated records list
    function getEmployeeData(employeeArray)
    {
        console.log(employeeArray);
        return employeeArray.expand.employees;
    }

    async function getAvatarUrl(employee) {
        const record = await pb.collection('employeeInfo').getOne(employee.id, {requestKey: null});
        const url = pb.files.getUrl(record, employee.avatar);
        console.log(url);
        return "http://localhost:8080/api/files/f2zbxcw4ezb95f8/rt0u6dz6haoew95/sana_AwE5UefxN8.jpeg";
    }

    return (
        <Container >
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
            <Grid container spacing={2} sx={{
                display:'flex',
                justifyContent: 'space-evenly',
                width: '100%'}}>
                {
                    resultList.map((branch) => {
                        const employees = getEmployeeData(branch);

                        return employees.map((employee) => (
                            <Grid item xs={12} sm={6} md={4} key={employee.id}>
                            <Paper elevation={4} sx={{
                                p:5,
                               maxWidth: 345,
                                flexGrow: 1,
                                display: 'flex'
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item xs={12} sm container direction="column">
                                        <Typography>{employee.firstName}</Typography>
                                        <Typography variant="h4">{employee.lastName}</Typography>
                                        <Typography variant="subtitle2" color="primary.dark" sx={{mt:5}}>{branch.role}</Typography>
                                    </Grid>
                                </Box>
                                {employee.avatar ?
                                    // TODO - will change to dynamic loading instead of hardcoding
                                    <Avatar srcSet={`${pb.baseUrl}/api/files/${employee.collectionId}/${employee.id}/${employee.avatar}`}
                                    sx={{ width: 60, height: 60, marginLeft: 'auto'}} /> :
                                    <Avatar sx={{ width: 60, height: 60, marginLeft: 'auto'}}>
                                        {employee.lastName[0]}
                                    </Avatar>
                                }
                            </Paper>
                            </Grid>
                        ))
                    })
                }
            </Grid>
        </Container>
    );
};

// SELECT columns at somewhere else for displaying necessary information only
// Having a separate collections to handle attendance ( will also need to think about branch

export default BranchView;
