import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/material";

import header_image from "../../assets/header-image.jpeg"
import Carousel from "react-material-ui-carousel";
import CarouselComponent from "../CarouselComponent";

export default function HomePage() {
    return (
        <>
            <Header />
            
            <br />
            <br />

            <Divider variant="middle">
                <Typography variant="h3" style={{ textAlign: "center" }}>
                    Our Mission
                </Typography>
            </Divider>

            <br />

            <Container >
                <CarouselComponent />
            </Container>

            <br />

            <Divider variant="middle">
                <Typography variant="h3" style={{ textAlign: "center" }}>
                    Our Locations
                </Typography>
            </Divider>

            <br />

            <Container>
                <p align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7224053429363!2d106.82137527400752!3d-6.167914993819365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f567d8adcb6f%3A0xde490e60a9a44e65!2sThe%20State%20Palace!5e0!3m2!1sen!2sid!4v1708490372537!5m2!1sen!2sid" width="500" height="500" style={{ border: "1px, solid", padding: "10px", boxShadow: "5px 10px red", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
            </Container>
        </>
    )
}

function Header() {
    return (
        <Container fixed >
            <Grid container spacing={1} marginTop={"100px"}>
                <Grid item xs={6}>
                    {/* <h2>Nginep Aja!</h2> */}
                    <img src={header_image} alt="Hotel" style={{ width: "500px", borderRadius: "20px" }} />
                </Grid>
                <Grid item xs={6}>
                    {/* <h2 style={{ textAlign: "center" }}>About Us</h2> */}
                    <Typography variant="h2">
                        About us
                    </Typography>

                    <Typography variant="body1" style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cum nemo nisi mollitia neque officiis dolores inventore et fugit impedit ab numquam tempora voluptas laborum, consectetur repellat? Vitae, omnis. Explicabo.
                        Fugiat molestiae illo autem, eveniet impedit praesentium nihil dolorum quod, voluptatem aliquam, iste ducimus at placeat a omnis doloremque necessitatibus illum. Placeat aspernatur eum nisi officiis ullam sint fugit dolor?
                        Repellendus, sit! Delectus mollitia nisi magni repellendus ipsum, ipsam quos aliquam expedita, repellat saepe omnis impedit pariatur voluptate? Placeat minima omnis adipisci hic velit assumenda eum sit numquam consectetur fugit.
                        Repellat dignissimos quis voluptatem veritatis! Optio totam nesciunt adipisci rerum aut quas atque exercitationem, quo omnis provident eligendi quasi sunt commodi quos molestias iusto repellendus laboriosam earum necessitatibus non doloribus!
                        Dicta numquam similique, accusantium maiores, eveniet, quam beatae velit vitae perspiciatis ipsum necessitatibus et? Soluta nesciunt totam nihil maxime culpa? Reprehenderit nisi quae odio velit harum! Maxime mollitia recusandae deserunt.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}