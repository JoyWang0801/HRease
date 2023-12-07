import { Button, TextField, Container, Typography, Box, CssBaseline, Paper } from '@mui/material';
import login_background from '../assets/login_background.jpg';
import logo from '../assets/Hrease_logo.png';
import { Description, EmailInput, Wrapper, NextButton } from '../components/styles/AccountRecovery.styled';

const PasswordResetConfirmation = () => {

    return (
        <Box
        sx={{
            height: '100vh',
            backgroundImage: `url(${login_background})`, // Replace with your actual image path
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start', // Changed from 'center' to 'flex-start'
            pt: 12, // Add some padding at the top
        }}
    >
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper
                elevation={12}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // This makes the Paper background slightly transparent
                }}
            >
                <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src={logo} // Replace with your actual logo path
                        alt="HRease Logo"
                        style={{ height: '100px', width: '100px' }} // Adjust size as needed
                    />
                    <Typography component="h1" variant="h5" sx={{ my: 2, fontFamily: '"Merriweather", serif', fontStyle: 'italic', fontWeight: 400, textAlign: 'center', }}>
                        Password reset has been sent to your device
                    </Typography>
                    <Wrapper>
                        <NextButton>Back to Login</NextButton>
                    </Wrapper>
                </Box>
                <Typography component="h3" variant="body1" color="error">
                    {/* {error} */}
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                </Box>
            </Paper>
            <Box
                component="footer"
                sx={{
                    p: 1, // Reduced padding
                    mt: 'auto',
                    width: '100%',
                    backgroundColor: 'white', // Less prominent, transparent background
                    color: 'grey', // Less prominent text color
                    fontSize: '0.75rem', // Smaller font size
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    textAlign: 'center', // Center the text
                    opacity: 0.5, // Reduce opacity to make it less prominent
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body2" color="textSecondary" align="center">
                        {new Date().getFullYear()}
                        {' © Developed and maintained by Jason, Parker, Bill, Joy and Jimmy'}
                    </Typography>
                </Container>
            </Box>
        </Container>
    </Box>
    )
}


export default PasswordResetConfirmation;