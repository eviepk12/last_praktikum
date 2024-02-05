import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <Typography variant="h4" component="dic" sx={{ flexGrow: 1 }}>
                        Nginep Aja
                    </Typography>
                    <Button href={"/"} color="inherit">Home</Button>
                    <Button href={"/hotels"} color="inherit">Hotels</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}