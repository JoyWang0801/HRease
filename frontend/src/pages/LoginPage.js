import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Box, CssBaseline, Paper } from '@mui/material';
import pb from "../lib/pocketbase";
import login_background from '../assets/login_background.jpg';
import logo from '../assets/Hrease_logo.png';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userID, setUserID] = useState('');
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let user = await pb.collection('users').authWithPassword(email, password);
            setIsLoggedIn(true);
            setUserID(user.record.id);
            localStorage.setItem('authToken', user.token);
        } catch (err) {
            console.error('Failed to login:', err);
            setError(err.message);
        }
    };

    if (isLoggedIn) {
        localStorage.setItem('userID', userID);
        console.log("userID: " + userID);
        navigate('/personal', { replace: true }); // Navigate to the home page
        window.location.reload();
    }

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
                        <Typography component="h1" variant="h4" sx={{ my: 2, fontFamily: '"Merriweather", serif', fontStyle: 'italic', fontWeight: 400 }}>
                            Welcome to HRease
                        </Typography>
                    </Box>
                    <Typography component="h3" variant="body1" color="error">
                        {error}
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
                        >
                            Sign In
                        </Button>
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
    );
};
