import React, { useState, useEffect } from 'react';
import {Button, TextField, Container, Typography, MenuItem, styled, Card} from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import pb from "./lib/pocketbase";
import Stack from '@mui/material/Stack';
import {Form, useForm} from "react-hook-form";
import axios from 'axios';


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
    const { register, handleSubmit, reset, control, setValue } = useForm();
    async function onSubmit(data) {
        try {
            console.log(data);

            //let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            // example create data
            // const data = {
            //     "Authorization": admin.token,
            //     "City": "rvrv",
            //     "Email": "twice@twice.com",
            //     "DateOfBirth": formData.get("dateOfBirth")
            //
            //     //ID, Name, Gender, SSN, Emergency Contact, Department, Position, Avatar, Starting Date, Bank Account.
            // };

            //const record = await pb.collection('test').create(data);
            //console.log(record);

            try {
                let name = "sana";
                const response = await axios.get(pb.baseUrl + `/testRoute`);
                console.log(response);
            } catch (error) {
                console.error('Error fetching file content:', error);
            }

        } catch (e) {
            console.log(e);
        }
    }

    async function testSubmit() {
        try {
            let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            try {
                let name = "sana";
                const response = await axios.get(pb.baseUrl + `/testRoute`);
                console.log(response);
            } catch (error) {
                console.error('Error fetching file content:', error);
            }

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={testSubmit}
            >
                Test Connect
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="row" spacing={2}>
                    <DemoPaper elevation={6} square={false}>
                        <Typography component="h1" variant="h5">
                            Personal Info
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    label="First Name"
                                    type="text"
                                    {...register("firstName")}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    type="string"
                                    autoComplete="family-name"
                                    {...register("lastName")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Address"
                                    type="string"
                                    autoComplete="address"
                                    {...register("address")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                    {...register("password")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    helperText="Date of Birth"
                                    type="date"
                                    {...register("dateOfBirth")}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    required
                                    label="Gender"
                                    {...register("gender")}
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
                                    required
                                    fullWidth
                                    type="string"
                                    label="City"
                                    {...register("city")}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Province"
                                    autoComplete="province"
                                    type="string"
                                    autoFocus
                                    {...register("province")}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Post Code"
                                    autoComplete="postCode"
                                    autoFocus
                                    type="string"
                                    {...register("postCode")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
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
                        </Grid>
                    </DemoPaper>
                    <DemoPaper elevation={6} square={false}>
                            <Typography component="h1" variant="h5">
                                Contact Info
                            </Typography>
                            <Container component="main" maxWidth="xs">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="Email"
                                            required
                                            fullWidth
                                            label="Email"
                                            type="text"
                                            autoFocus
                                            {...register("email")}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="Phone Number"
                                            required
                                            fullWidth
                                            label="Phone Number"
                                            type="text"
                                            autoFocus
                                            {...register("phoneNumber")}

                                        />
                                    </Grid>
                                </Grid>
                            </Container>

                            <Typography component="h1" variant="h5">
                                Emergency Contact
                            </Typography>
                            <Container component="main" maxWidth="xs">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="Relationship"
                                            label="Relationship"
                                            type="text"
                                            autoFocus
                                            {...register("relationship")}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="Full Name"
                                            label="Full Name"
                                            type="text"
                                            autoFocus
                                            {...register("dependentName")}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="Email"
                                            label="Email"
                                            type="email"
                                            autoFocus
                                            {...register("dependentEmail")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="Phone Number"
                                            label="Phone Number"
                                            type="text"
                                            autoFocus
                                            {...register("dependentPhoneNumber")}
                                        />
                                    </Grid>
                                </Grid>
                            </Container>
                    </DemoPaper>
                </Stack>
            </form>
        </>
    );
};

export default AddUserPage;
