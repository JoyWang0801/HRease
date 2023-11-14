import React, { useState } from 'react';
import {Button, TextField, Container, Typography, MenuItem, styled, Card} from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import pb from "./lib/pocketbase";
import Stack from '@mui/material/Stack';


const DemoPaper = styled(Card)(({ theme }) => ({
    width: "45%",
    height: "auto",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center'
}));


const genders = [
    {
        value: 'Woman',
        label: 'Woman',
    },
    {
        value: 'Man',
        label: 'Man',
    },
    {
        value: 'Transgender',
        label: 'Transgender',
    },
    {
        value: 'Non-binary/non-conforming',
        label: 'Non-binary/non-conforming',
    },
    {
        value: 'NA',
        label: 'Prefer not to respond',
    }
];

// TODO - velidate in frontend
const AddUserPage = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);

        try
        {
            // Need admin token to create
            //let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            // example create data
            const data = {
                "Authorization": admin.token,
                "City": "rvrv",
                "Email": "twice@twice.com",
                "DateOfBirth": formData.get("dateOfBirth")

                //ID, Name, Gender, SSN, Emergency Contact, Department, Position, Avatar, Starting Date, Bank Account.
            };

            const record = await pb.collection('test').create(data);
            console.log(record);
        }
        catch (e)
        {
            console.log(e);
        }
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={10}>
            <DemoPaper elevation={6} square={false}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Personal Info
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        type="string"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        type="string"
                                        autoComplete="address"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="dateOfBirth"
                                        helperText="Date of Birth"
                                        name="dateOfBirth"
                                        type="date"
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="gender"
                                        select
                                        required
                                        label="Gender"
                                        name="gender"
                                        defaultValue="NA"
                                        helperText="Please select your gender"
                                    >
                                        {genders.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="city"
                                        name="city"
                                        required
                                        fullWidth
                                        id="city"
                                        type="string"
                                        label="City"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="province"
                                        label="Province"
                                        name="province"
                                        autoComplete="province"
                                        type="string"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="postCode"
                                        label="Post Code"
                                        name="postCode"
                                        autoComplete="postCode"
                                        autoFocus
                                        type="string"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
            </DemoPaper>
            <DemoPaper elevation={6} square={false}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Contact Info
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Email"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Phone Number"
                                    name="phoneNumber"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>



                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Emergency Contact
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Relationship"
                                    name="relationship"
                                    id="relationship"
                                    label="Relationship"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Full Name"
                                    name="fullName"
                                    id="fullName"
                                    label="Full Name"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Email"
                                    name="email"
                                    id="email"
                                    label="Email"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Phone Number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    label="Phone Number"
                                    type="text"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>



                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </DemoPaper>
        </Stack>
    );
};

export default AddUserPage;
