import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Rating, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function UpdateFormPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [about, setAbout] = useState('')
    const [balance, setBalance] = useState('')
    const [city, setCity] = useState('')
    const [rating, setRating] = useState('')

    const { id } = useParams();
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.put(`http://localhost:8000/hotels/${id}`, {
            name: name,
            email: email,
            phone: phone,
            address: address,
            about: `${about}\r\n`,
            balance: `$${balance}`,
            city: city,
            rating: rating
        }).then(() => { console.log("new hotel added") }).then(() => { navigate("/hotels") })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container>
                    <div style={{ display: "grid", placeItems: "center" }}>

                        <Typography variant="h2" style={{ textAlign: "center", marginTop: "20px" }}>
                            Update Hotel
                        </Typography>
                        <Typography variang="subtitle" style={{ color: "orange" }}>
                            Update all the necessary information for the updated hotel
                        </Typography>

                        <br />
                        <br />

                        <TextField required label="Name" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                        <TextField required label="Email" type="email" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField required label="Phone" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField required label="Address" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            value={address} onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField required label="About" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            defaultValue={about} onChange={(e) => setAbout(e.target.value)}
                        />
                        <TextField required label="Balance" type="number" variant="outlined" style={{ width: "45vw" }} margin="dense"
                            defaultValue={balance} onChange={(e) => setBalance(e.target.value)}
                        />

                        <FormControl>
                            {/* <TextField label="city" variant="outlined" style={{ width: "45vw" }} margin="dense"> */}
                            <InputLabel id="city">City</InputLabel>
                            <Select required id="city" style={{ width: "45vw", marginTop: "10px" }} label="City" value={city} onChange={(e) => setCity(e.target.value)}>
                                <MenuItem value={"Jakarta"}>Jakarta</MenuItem>
                                <MenuItem value={"Bogor"}>Bogor</MenuItem>
                                <MenuItem value={"Depok"}>Depok</MenuItem>
                                <MenuItem value={"Tangerang"}>Tangerang</MenuItem>
                                <MenuItem value={"Tangerang Selatan"}>Tangerang Selatan</MenuItem>
                                <MenuItem value={"Bekasi"}>Bekasi</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography component="legend">Rating : </Typography>
                        <Rating defaultValue={rating}  onChange={(e) => { setRating(e.target.value) }} />

                        <Container style={{ marginTop: "20px" }}>
                            <Grid container justifyContent="center" spacing="4">
                                <Grid item>
                                    <Button type="submit" variant="contained" color="success">Update</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" href={"/hotels"} color="error">Cancel</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Container>
            </form>
        </>
    )
}