import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Typography } from '@mui/material'

export default function CarouselComponent(props) {
    var items = [
        {
            title: "Professionalism",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magni maiores quisquam culpa, tempora, fuga odio assumenda nam libero delectus dicta porro expedita incidunt perspiciatis esse! Veritatis architecto sed alias Sit hic porro nostrum sed tempore quisquam enim illo delectus, cum dignissimos, ad alias quas non! Culpa soluta iusto minima dolore suscipit earum, reprehenderit quibusdam, aut ex expedita vitae officia.",
            imageUrl: "https://i.imgur.com/cx2GryK.png"
        },
        {
            title: "Hospitability",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magni maiores quisquam culpa, tempora, fuga odio assumenda nam libero delectus dicta porro expedita incidunt perspiciatis esse! Veritatis architecto sed alias Sit hic porro nostrum sed tempore quisquam enim illo delectus, cum dignissimos, ad alias quas non! Culpa soluta iusto minima dolore suscipit earum, reprehenderit quibusdam, aut ex expedita vitae officia.",
            imageUrl: "https://i.imgur.com/5PAHNvU.png"
        },
        {
            title: "Accesibility",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magni maiores quisquam culpa, tempora, fuga odio assumenda nam libero delectus dicta porro expedita incidunt perspiciatis esse! Veritatis architecto sed alias Sit hic porro nostrum sed tempore quisquam enim illo delectus, cum dignissimos, ad alias quas non! Culpa soluta iusto minima dolore suscipit earum, reprehenderit quibusdam, aut ex expedita vitae officia.",
            imageUrl: "https://i.imgur.com/pwoSUa7.png"
        }
    ]

    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper style={{ height: "500px" }} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h3" style={{ textAlign: "center" }}>
                        {props.item.title}
                    </Typography>
                    <br />
                    <Typography variant="body2" style={{ textALign: "justify" }}>
                        {props.item.description}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <img src={props.item.imageUrl} style={{ height: "500px", width: "600px", display: "grid", placeItems: "center" }} />
                </Grid>
            </Grid>

        </Paper>
    )
}
