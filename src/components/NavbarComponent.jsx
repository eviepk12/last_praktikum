import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function NavbarComponent({ userData }) {
    const [themeIndex, setThemeIndex] = useState(1)

    function handleDeleteUserStorage() {
        localStorage.removeItem("user")
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        Nginep Aja
                    </Typography>
                    <div style={{ marginRight: "25px" }}>
                        <Button href={"/"} color="inherit">Home</Button>
                        <Button href={"/hotels"} color="inherit">Hotels</Button>
                    </div>

                    {userData ? (
                        <div>
                            <Button onClick={() => {handleDeleteUserStorage()}} variant="contained" color="error">Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Button href={"/login"} variant="contained" color="success">Login</Button>
                        </div>
                    )}

                    <div style={{ marginLeft: "15px" }}>
                        <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => themeIndex === 1 ? setThemeIndex(2) : setThemeIndex(1)}>
                            {themeIndex === 1 ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}