import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";

export default function NavbarComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        Nginep Aja
                    </Typography>
                    <div style={{marginRight: "25px"}}>
                        <Button href={"/"} color="inherit">Home</Button>
                        <Button href={"/hotels"} color="inherit">Hotels</Button>
                    </div>
                    <div>
                        <Button href={"/login"} variant="contained" color="inherit">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}