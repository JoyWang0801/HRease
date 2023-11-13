import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8080'); // Replace with your PocketBase server URL

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Perform the login via PocketBase SDK
            const user = await pb.collection('users').authWithPassword(email, password);
            console.log('User logged in', user);
            // You might want to save the user token to localStorage and redirect to the dashboard, for example:
            localStorage.setItem('authToken', user.token);
            // Redirect to dashboard or another route depending on your application's flow
        } catch (err) {
            console.error('Failed to login:', err);
            setError(err.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ marginTop: '8vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '1rem' }}>
                    {error && <Typography color="error">{error}</Typography>}
                    <TextField
                        variant="outlined"
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
                        variant="outlined"
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
                        color="primary"
                        style={{ margin: '24px 0 16px' }}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginPage;
