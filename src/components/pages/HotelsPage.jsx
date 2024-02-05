import React, { useEffect, useReducer } from "react";
import Navbar from "../Navbar";
import CardComponent from "../CardComponent";
import { Container, Grid } from "@mui/material";
import axios from "axios";

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
            return {}
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

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API })
        const getHotels = async () => {
            let response = await axios.get("http://localhost:8000/hotels");
            if (response.status === 200) {
                dispatch({ type: ACTIONS.SUCCESS, data: response.data })
                return;
            }
            dispatch({ type: ACTIONS.ERROR, error: response.error })
        }
        getHotels();
        console.log(hotelsDetails);
    }, [])

    return (
        <>

            <Navbar />
            <Container maxWidth="xl" disableGutters={true}>
                <Grid container spacing={6} justifyContent="center" alignItems="center" direction="row">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        hotelsDetails.map((hotel) => {
                            return (
                                <Grid item xs={3} key={hotel.id}>
                                    <CardComponent name={hotel.name} about={hotel.about} address={hotel.address} hotelId={hotel.id} hotel={hotelsDetails}/>
                                </Grid>

                            )
                            // return <h1>{hotel.name}</h1>
                        })

                    )}

                    {/* <Grid item xs={3}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid>
                    <Grid item xs={3}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid>
                    <Grid item xs={3}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </Grid> */}

                </Grid>
            </Container>

            {/* <Footer /> */}
        </>
    )

}