import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import pb from "../lib/pocketbase";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(pb.authStore.isValid);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Perform the login via PocketBase SDK
            let user = await pb.collection('users').authWithPassword(email, password);
            setLoggedIn(true);
            console.log('User logged in', user);
            // You might want to save the user token to localStorage and redirect to the dashboard, for example:
            localStorage.setItem('authToken', user.token);
            // Redirect to dashboard or another route depending on your application's flow

        } catch (err) {
            console.error('Failed to login:', err);
            setError(err.message);
        }

    };

    if(isLoggedIn)
    {
        return (
            <>
                <h1>Logged In: {pb.authStore.model.email}</h1>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ margin: '24px 0 16px' }}
                    onClick={()=>{
                        pb.authStore.clear();
                        setLoggedIn(false);
                    }}
                >
                    Logout
                </Button>
            </>
        )
    }

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
