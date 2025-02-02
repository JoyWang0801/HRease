import { Container, Typography, Box, Paper, Avatar} from '@mui/material';
import pb from "../lib/pocketbase";
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";

const BranchView =  () => {
    const [employeeList, setEmployeeList] = useState([]);

    // fetch a paginated records list
    function getEmployeeData(employeeArray)
    {
        console.log(employeeArray);
        return employeeArray.expand.employees;
    }

    useEffect( () => {
        async function fetchEmployees() {
            // Runs ONCE after initial rendering
            setEmployeeList(await pb.collection("branch").getList(1, 30, {expand: "employees"})
                .then((result) => {
                    // success...
                    return result.items;
                }).catch((error) => {
                    // error...
                    console.log('Error:', error);
                }))
        }

        fetchEmployees();
    }, []);

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
                    employeeList.map((branch) => {
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
                                            <Typography variant="subtitle2" color="primary.dark" sx={{mt:5}}>{branch.role} &#x2022; {branch.employmentType}</Typography>
                                        </Grid>
                                    </Box>
                                    {employee.avatar ?
                                        <Avatar src={`${pb.baseUrl}/api/files/${employee.collectionId}/${employee.id}/${employee.avatar}`}
                                                sx={{ width: 120, height: 120, marginLeft: 'auto'}} /> :
                                        <Avatar sx={{ width: 120, height: 120, marginLeft: 'auto'}}>
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