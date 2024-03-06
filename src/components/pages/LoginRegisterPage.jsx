import React, { useEffect, useState, createContext } from "react";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const userContext = createContext()

export default function LoginRegisterPage() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            {isLogin === true ? <Login /> : <Register />}
        </>
    )

    function Login() {
        const [users, setUsers] = useState([])
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [isLoggedIn, setIsLoggedIn] = useState(false)
        const navigate = useNavigate()

        useEffect(() => {
            const getUsers = async () => {
                let response = await axios.get(`http://localhost:8000/users`);
                if (response.status === 200) {
                    const userData = response.data
                    setUsers(userData)
                    return
                } else {
                    return console.log(response.error)
                }
            }
            getUsers();
        }, [])

        const handleLogin = (e) => {
            e.preventDefault()

            const validateUser = users.find((user) => {
                setIsLoggedIn(true)
                return user.username === username && user.password === password
            })

            if (isLoggedIn === true) {
                localStorage.setItem(validateUser, JSON.stringify(validateUser))
                console.log("User sucessfully stored to local storage")
                navigate("/")
            }

            console.log(validateUser)
            console.log(username)
            console.log(password)
        }

        return (
            <Container>
                <div style={{ display: "grid", placeItems: "center", marginTop: "25vh", marginBottom: "25vh" }}>
                    <br />
                    <Typography variant="h5">
                        Login
                    </Typography>
                    <br />

                    <form onSubmit={handleLogin}>
                        <Container style={{ display: "grid", placeItems: "center" }}>
                            <TextField label="Username" variant="outlined" margin="dense"
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField label="Password" type="password" variant="outlined" margin="dense"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            <br />
                            <Button type="submit" variant="contained">Login</Button>
                            <br />
                        </Container>
                    </form>

                    <Typography variant="b2">
                        Doesn't have an account? <Link onClick={() => { setIsLogin(false); console.log(isLogin); }}>Register</Link>
                    </Typography>

                </div>
            </Container>
        )
    }

    function Register() {
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const navigate = useNavigate()

        function handleRegister(e) {
            e.preventDefault()

            if (password === confirmPassword) {
                axios.post("http://localhost:8000/users", {
                    username: username,
                    password: password
                }).then(() => {
                    navigate("/hotels");
                })
            } else {
                console.log("registed failed")
            }
        }

        return (
            <Container>
                <div style={{ display: "grid", placeItems: "center", marginTop: "25vh", marginBottom: "25vh" }}>

                    <br />
                    <Typography variant="h5">
                        Register
                    </Typography>
                    <br />

                    <form onSubmit={handleRegister}>
                        <Container style={{ display: "grid", placeItems: "center" }}>
                            <TextField label="Username" variant="outlined" margin="dense"
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField label="Password" type="password" variant="outlined" margin="dense"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField label="Confirm Password" type="password" variant="outlined" margin="dense"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <br />
                            <Button type="submit" variant="contained">Register</Button>
                            <br />
                        </Container>
                    </form>

                    <Typography variant="b2">
                        Already have an account? <Link onClick={() => { setIsLogin(true); console.log(isLogin); }}>Login</Link>
                    </Typography>
                </div>
            </Container>
        )
    }
}