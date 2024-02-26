import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../NavbarComponent";
import image from "../../assets/header-image.jpeg"
import axios from "axios";

// Material Imports
import { Container, Grid, Pagination } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Divider } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Search } from "@mui/icons-material";
import MenuButtonComponent from "../MenuButtonComponent";


export const ACTIONS = {
    CALL_API: "call-api",
    SUCCESS: "success",
    ERROR: "error",
    DELETE_HOTEL: "delete-hotel",
    ADD_HOTEL: "add-hotel"
}

const hotelsDetailsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CALL_API: {
            return {
                ...state,
                loading: true
            };
        }
        case ACTIONS.SUCCESS: {
            return {
                ...state,
                loading: false,
                hotelsDetails: action.data
            };
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                loading: true,
                error: action.error
            };
        }
        case ACTIONS.DELETE_HOTEL: {
            return {
                ...state
            }
        }
        case ACTIONS.ADD_HOTEL: {
            return {
                ...state,
            }
        }
    }
}

const initialState = {
    hotelsDetails: [],
    loading: false,
    error: null
}

export default function HotelsPage() {
    const [state, dispatch] = useReducer(hotelsDetailsReducer, initialState)
    const { hotelsDetails, loading, error } = state
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API })
        const getHotels = async () => {
            let response = await axios.get(`http://localhost:8000/hotels?_page=${currentPage}&_per_page=10`);
            if (response.status === 200) {
                dispatch({ type: ACTIONS.SUCCESS, data: response.data.data })
                console.log(response.data.data)
                return;
            }
            dispatch({ type: ACTIONS.ERROR, error: response.error })
        }
        getHotels();
        console.log(hotelsDetails);
    }, [])

    function formatAbout(about) {
        return (
            about.substring(0, 60) + "..."
        )
    }

    function handlePages(nextPage) {
        setCurrentPage(nextPage)
    }

    return (
        <>
            <Container>
                <br />
                <Container>
                    <Grid container spacing="12">
                        <Grid item xs="11">
                            <MenuButtonComponent />
                        </Grid>
                        {/* <Grid item xs="1">
                            <Search />
                        </Grid> */}

                    </Grid>
                </Container>
                <br />

                <Container maxWidth="xl" disableGutters={true}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" direction="row">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            hotelsDetails.map((hotel) => {
                                return (
                                    <Grid item key={hotel.id}>
                                        {/* <CardComponent name={hotel.name} about={hotel.about} address={hotel.address} hotelState={hotelsDetails}/> */}
                                        <Card sx={{ flexgrow: 1 }}>
                                            <CardActionArea href={`/details/${hotel.id}`}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={image}
                                                    alt={hotel.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {hotel.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {formatAbout(hotel.about)}
                                                    </Typography>
                                                    <br />
                                                    <Typography variant="body2" color="text.secondary">
                                                        <span style={{ color: "red" }}>Address :</span>  <span style={{ color: "green" }}>{hotel.address}</span>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                            <Divider variant="middle" />

                                            <CardActions>
                                                <Button size="small" variant="contained" color="success">
                                                    Update
                                                </Button>
                                                <Button size="small" variant="contained" color="error">
                                                    Delete
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        )}
                    </Grid>

                    <br />
                    <br />
                    <br />

                    <Divider />

                    <br />
                    <br />
                    <br />

                    <div style={{display: "grid", placeItems: "center"}}>
                        <Pagination count={10}/>
                    </div>

                </Container>
            </Container >
        </>
    )

}