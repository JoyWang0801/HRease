import React from 'react';
import { Paper, Avatar, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

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
const employees = [
    { id: 1, name: 'Alice', present: true },
    { id: 2, name: 'Bob', present: false },
    // ... add more employees
];

function BubbleComponent() {
    const attendance = employees.filter(e => e.present).length;
    const total = employees.length;
    const attendancePercentage = (attendance / total * 100).toFixed(0);

    return (
        <StyledPaper>
            <Typography variant="h6" component="h3">
                Martindale
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
                    $73258.7
                </Typography>
            </InfoContainer>
            <InfoContainer>
                <Typography component="p">
                    Manager:
                </Typography>
                <Typography component="p">
                    Dominic Toretto
                </Typography>
            </InfoContainer>
            <Grid container spacing={2} justifyContent="center">
                {employees.map((employee) => (
                    <Grid item key={employee.id}>
                        <StyledAvatar>
                            {employee.name[0]}
                        </StyledAvatar>
                    </Grid>
                ))}
            </Grid>
        </StyledPaper>
    );
}

export default BubbleComponent;
