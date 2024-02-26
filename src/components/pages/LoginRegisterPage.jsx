import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { TextField, Button, Typography, Input } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function LoginRegisterPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    async function loginUser(credentials) {
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
    }

    return (
        <>
            {isLogin === true ? <Login /> : <Register />}
        </>
    )

    function Login({setToken}) {
        const handleSubmit = async e => {
            e.preventDefault();
            const token = await loginUser({
                username,
                password
            });
            setToken(token);
        }

        return (
            <Container>
                <div style={{ display: "grid", placeItems: "center", marginTop: "15%" }}>

                    <br />
                    <Typography variant="h5">
                        Login
                    </Typography>
                    <br />

                    {/* <form onSubmit={handleSubmit}> */}
                        <TextField id="filled-basic" label="Username" variant="filled" oSubmit={e => setUsername(e.target.value)} />
                        <TextField type="password" id="filled-basic" label="Password" variant="filled" onSubmit={e => setPassword(e.target.value)} />

                        <br />
                        <Button type="submit" variant="contained">Login</Button>
                        <br />
                    {/* </form> */}

                    <Typography variant="b2">
                        Doesn't have an account? <Link onClick={() => { setIsLogin(false); console.log(isLogin); }}>Register</Link>
                    </Typography>

                </div>
            </Container>
        )
    }

    function Register() {
        return (
            <Container>
                <div style={{ display: "grid", placeItems: "center", marginTop: "15%" }}>

                    <br />
                    <Typography variant="h5">
                        Register
                    </Typography>
                    <br />

                    <TextField id="filled-basic" label="Username" variant="filled" />
                    <TextField id="filled-basic" label="Password" variant="filled" />
                    <TextField id="filled-basic" label="Confirm Password" variant="filled" />

                    <br />
                    <Button>Register</Button>
                    <br />

                    <Typography variant="b2">
                        Already have an account? <Link onClick={() => { setIsLogin(true); console.log(isLogin); }}>Login</Link>
                    </Typography>
                </div>
            </Container>
        )
    }
}