import {Button, TextField, Container, Typography, MenuItem, styled, Card} from '@mui/material';
import Grid from '@mui/material/Grid';
import pb from "../lib/pocketbase";
import Stack from '@mui/material/Stack';
import {useForm} from "react-hook-form";


const DemoPaper = styled(Card)(({ theme }) => ({
    width: "45%",
    height: "auto",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',

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
    const { register, handleSubmit} = useForm();
    async function onSubmit(data) {
        try {
            console.log(`data before send: ${JSON.stringify(data)}`);

            //let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
            let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");

            //const record = await pb.collection('test').create(data);
            //console.log(record);

            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const myInit = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body : JSON.stringify(data)
                };

                let response = await pb.send("/testRoute", myInit)
                console.log(response);
            } catch (error) {
                console.error('Error fetching file content:', error);
            }

        } catch (e) {
            console.log(e);
        }
    }

    // async function testSubmit() {
    //     try {
    //         let admin = await pb.admins.authWithPassword("test@admin.com", "9gnpjtCvolfWrNe-JZtrMZBVr5c0bzMD");
    //         try {
    //             const myHeaders = new Headers();
    //             myHeaders.append("Content-Type", "application/json");
    //
    //             const myInit = {
    //                 method: "POST",
    //                 headers: myHeaders,
    //                 body : JSON.stringify({name : "sana"})
    //             };
    //
    //              let response = await pb.send("/testRoute", myInit)
    //              console.log(response);
    //
    //         } catch (error) {
    //             console.error('Error fetching file content:', error);
    //         }
    //
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <>
            {/*<Button*/}
            {/*    type="submit"*/}
            {/*    fullWidth*/}
            {/*    variant="contained"*/}
            {/*    sx={{ mt: 3, mb: 2 }}*/}
            {/*    onClick={testSubmit}*/}
            {/*>*/}
            {/*    Test Connect*/}
            {/*</Button>*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="row" spacing={2}>
                    <DemoPaper elevation={6} square={false} >
                        <Typography component="h1" variant="h5" sx={{m:5}}>
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </DemoPaper>
                    <DemoPaper elevation={6} square={false}>
                            <Typography component="h1" variant="h5" sx={{m: 5}}>
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


                            <Typography component="h1" variant="h5" sx={{m: 5}}>
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
