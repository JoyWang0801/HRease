
import React, {useEffect, useState} from 'react';
import { Paper, Avatar, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import pb from "../lib/pocketbase";

const StyledPaper = styled(Paper)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    textAlign: 'center',
    '&:after': { // Creates the triangle pointer pointing downwards
        content: '""',
        position: 'absolute',
        top: '100%', // Place it at the top of the paper
        left: '50%', // Center the pointer
        transform: 'translateX(-50%)', // Center the pointer with respect to its width
        width: 0,
        height: 0,
        borderLeft: '20px solid transparent', // The size of the triangle
        borderRight: '20px solid transparent', // The size of the triangle
        borderTop: `20px solid ${theme.palette.background.paper}`, // Color of the triangle, pointing downwards
    },
}));


const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: 'auto',
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
}));

const InfoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
}));

// Replace with your actual data
// const employees = [
//     { id: 1, name: 'Alice', present: true },
//     { id: 2, name: 'Bob', present: false },
//     // ... add more employees
// ];

// const formList = (keyName, obj) =>
// {
//     const returnList = []
//     for (const [key, value] of Object.entries(obj)) {
//         // console.log("key: ", key, "value: ", value);
//         // if(key === keyName)
//         // {
//         //     console.log(`Key: ${key}, Value: ${value} matched\n`);
//         //     returnList.push(value);
//         // }
//         returnList.push(value[keyName]);
//         console.log("pushed: ", value[keyName]);
//     }
//
//     return returnList;
// }

function BubbleComponent({branchInfo}) {
    const [employees, setEmployees] = useState([]);
    const attendance = employees.filter(e => e.present).length;
    const total = employees.length;
    const attendancePercentage = (attendance / total * 100).toFixed(0);
    const [manager, setManager] = useState("");
    const [totalSalary, setTotalSalary] = useState(0);

    useEffect(() => {
        function getInformation(branchInfo)
        {
            const eList = []
            let totalSalary = 0;
            for (const [key, value] of Object.entries(branchInfo)) {
                value.expand.employees.forEach((element) =>eList.push(element));
                totalSalary += value.salary;
                if(value.role === "Manager")
                {
                    setManager(`${value.expand.employees[0].firstName} ${value.expand.employees[0].lastName}`);
                }
            }
            setEmployees(eList);
            setTotalSalary(totalSalary);
        }

        getInformation(branchInfo);
    }, []);


    return (
        <StyledPaper>
            <Typography variant="h6" component="h3">
                {branchInfo[0].address.split(',')[0]}
            </Typography>
            <InfoContainer>
                <Typography component="p">
                    Attendance: {attendance}/{total}
                </Typography>
                <Typography component="p">
                    {attendancePercentage}%
                </Typography>
            </InfoContainer>
            <InfoContainer>
                <Typography component="p">
                    Projected Payroll:
                </Typography>
                <Typography component="p">
                    ${totalSalary}
                </Typography>
            </InfoContainer>
            <InfoContainer>
                <Typography component="p">
                    Manager:
                </Typography>
                <Typography component="p">
                    {manager === "" ? "No manager" : manager}
                </Typography>
            </InfoContainer>
            <Grid container spacing={2} justifyContent="center">
                {employees.map((employee) => (
                    <Grid item key={employee.id}>
                        {employee.avatar === "" ?
                            <StyledAvatar>
                                {employee.lastName[0]}
                            </StyledAvatar> :
                            <Avatar alt="Remy Sharp" src={pb.files.getUrl(employee, employee.avatar)} />
                        }
                    </Grid>
                ))}
            </Grid>
        </StyledPaper>
    );
}

export default BubbleComponent;
