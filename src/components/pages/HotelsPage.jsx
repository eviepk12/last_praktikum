import React, { useEffect, useReducer, useState } from "react";
import image from "../../assets/header-image.jpeg"
import axios from "axios";

// Material Imports
import { CircularProgress, Container, Grid, Select, MenuItem, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Divider } from '@mui/material';
import Button from '@mui/material/Button';

export const ACTIONS = {
    CALL_API: "call-api",
    SUCCESS: "success",
    ERROR: "error",
    DELETE_HOTEL: "delete-hotel",
    ADD_HOTEL: "add-hotel",
    FILTER_HOTELS: "filter-hotels",
    SEARCH_HOTELS: "search-hotels"
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
                ...state,
                hotelsDetails: state.hotelsDetails.filter((hotelsDetail) => hotelsDetail.id !== action.payload)
            }
        }
        case ACTIONS.FILTER_HOTELS: {
            return {
                ...state,
                filteredHotels: state.hotelsDetails.filter((hotelsDetail) => hotelsDetail.city.includes(action.payload))
            }
        }
        case ACTIONS.SEARCH_HOTELS: {
            return {
                ...state,
                filteredHotels: state.hotelsDetails.filter(hotelsDetails => {
                    if (hotelsDetails.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return hotelsDetails
                    }
                })
            }
        }
    }
}

const initialState = {
    hotelsDetails: [],
    filteredHotels: [],
    searchedHotels: [],
    loading: false,
    error: null
}

export default function HotelsPage() {
    const [state, dispatch] = useReducer(hotelsDetailsReducer, initialState)
    const { hotelsDetails, loading, error, filteredHotels } = state
    const [isNotFiltering, setIsNotFiltering] = useState(true)

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API })
        const getHotels = async () => {
            let response = await axios.get(`http://localhost:8000/hotels`);
            if (response.status === 200) {
                dispatch({ type: ACTIONS.SUCCESS, data: response.data })
                return;
            }
            dispatch({ type: ACTIONS.ERROR, error: response.error })
        }
        getHotels();
    }, [])

    function formatAbout(about) {
        return (
            about.substring(0, 60) + "..."
        )
    }

    const handleDelete = (id => {
        axios.delete(`http://localhost:8000/hotels/${id}`)
            .then(() => {
                console.log("deleted post")
                dispatch({ type: ACTIONS.DELETE_HOTEL, payload: id })
            })
            .catch(error => {
                alert("error deleting", error);
            })
    })

    const handleFilter = ((filterTerm) => {
        if (filterTerm === undefined) {
            return
        } else if (filterTerm === "All") {
            setIsNotFiltering(true)
        } else {
            dispatch({ type: ACTIONS.FILTER_HOTELS, payload: filterTerm })
            setIsNotFiltering(false)
            console.log(filteredHotels)
        }
    })

    const handleSearch = ((searchTerm => {
        if (searchTerm === "") {
            return setIsNotFiltering(true)
        } else {
            dispatch({ type: ACTIONS.SEARCH_HOTELS, payload: searchTerm })
            setIsNotFiltering(false)
            console.log(filteredHotels)
        }
    }))

    return (
        <>
            <Container>
                <br />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <div>
                        <Typography variant="subtitle">
                            Sort Cities
                        </Typography>
                        <br />
                        <Select id="city" defaultValue={"All"} label="City" onChange={(e) => handleFilter(e.target.value)}>
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Jakarta"}>Jakarta</MenuItem>
                            <MenuItem value={"Bogor"}>Bogor</MenuItem>
                            <MenuItem value={"Depok"}>Depok</MenuItem>
                            <MenuItem value={"Tangerang"}>Tangerang</MenuItem>
                            <MenuItem value={"Tangerang Selatan"}>Tangerang Selatan</MenuItem>
                            <MenuItem value={"Bekasi"}>Bekasi</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <TextField label="Search" variant="outlined" style={{ width: "45vw" }} margin="dense" 
                        onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div>
                        <Button variant="contained" color="success" href="/addHotel">
                            Add Hotel
                        </Button>
                    </div>
                </div>
                <br />

                <Container maxWidth="xl" disableGutters={true}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" direction="row">
                        {loading ? (
                            <Container style={{ display: "grid", placeItems: "center", marginTop: "40vh", marginBottom: "25vh" }}>
                                <CircularProgress />
                            </Container>
                        ) : error ? (
                            <p>{error}</p>
                        ) : isNotFiltering ? (
                            hotelsDetails.map((hotel) => {
                                return (
                                    <Grid item key={hotel.id} style={{width: "500px"}}>
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

                                                    <Typography variant="subtitle">
                                                        {hotel.city}
                                                    </Typography>

                                                    <br />

                                                    <Typography variant="body2" color="text.secondary">
                                                        {formatAbout(hotel.about)}
                                                    </Typography>

                                                    <br />

                                                </CardContent>
                                            </CardActionArea>

                                            <Divider variant="middle" />

                                            <CardActions>
                                                <Button size="small" href={`/updateHotel/${hotel.id}`} variant="contained" color="success">
                                                    Update
                                                </Button>
                                                <Button size="small" variant="contained" color="error" onClick={() => { handleDelete(hotel.id) }}>
                                                    Delete
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        ) : (
                            filteredHotels.map((filteredHotel) => {
                                return (
                                    <Grid item key={filteredHotel.id} style={{width: "500px"}}>
                                        <Card sx={{ flexgrow: 1 }}>
                                            <CardActionArea href={`/details/${filteredHotel.id}`}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={image}
                                                    alt={filteredHotel.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {filteredHotel.name}
                                                    </Typography>

                                                    <Typography variant="subtitle">
                                                        {filteredHotel.city}
                                                    </Typography>

                                                    <br />

                                                    <Typography variant="body2" color="text.secondary">
                                                        {formatAbout(filteredHotel.about)}
                                                    </Typography>

                                                    <br />

                                                </CardContent>
                                            </CardActionArea>

                                            <Divider variant="middle" />

                                            <CardActions>
                                                <Button size="small" href={`/updateHotel/${filteredHotel.id}`} variant="contained" color="success">
                                                    Update
                                                </Button>
                                                <Button size="small" variant="contained" color="error" onClick={() => { handleDelete(filteredHotel.id) }}>
                                                    Delete
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        )}

                        {/* <br />
                        <br />
                        <br />

                        <Divider />

                        <div style={{ display: "grid", placeItems: "center", marginTop: "50px" }}>
                            <Pagination count={pagesAmount} onClick={console.log(currentPage)} />
                        </div> */}

                    </Grid>


                </Container>
            </Container >
        </>
    )

}