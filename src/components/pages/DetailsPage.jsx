import React from "react";
import Navbar from "../NavbarComponent";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, Grid, Rating } from "@mui/material";
import Typography from '@mui/material/Typography';
import image from "../../assets/header-image.jpeg"

export default function DetailsPage() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/hotels/${id}`)
            .then((res) => res.json())
            .then((json) => setItem(json))
    }, [id])
    console.log(item);

    return (
        <>
            <Container fixed >
                {item &&
                    <Grid container spacing={1} marginTop={"100px"}>
                        <Grid item xs={6}>
                            {/* <h2>Nginep Aja!</h2> */}
                            <img src={image} alt="Hotel" style={{ width: "500px", borderRadius: "20px", marginBottom: "50px" }} />
                        </Grid>
                        <Grid item xs={6}>

                            <Typography variant="h1">
                                {item.name}
                            </Typography>

                            <Typography variant="h6">
                                {item.city}
                            </Typography>

                            <br />

                            <Typography variant="body1">
                                {item.about}
                            </Typography>

                            <br />

                            <Typography variant="body2" color="text.secondary">
                                <span style={{ color: "red" }}>Address :</span>  <span style={{ color: "green" }}>{item.address}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ color: "red" }}>Phone Number :</span>  <span style={{ color: "green" }}>{item.phone}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ color: "red" }}>Price :</span>  <span style={{ color: "green" }}>{item.balance}</span>
                            </Typography>

                            <br />
                            <Rating name="read-only" value={item.rating} readOnly />
                            <br />
                            
                        </Grid>
                    </Grid>
                }
            </Container>
        </>
    )
}