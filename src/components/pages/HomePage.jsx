import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

import header_image from "../../assets/header-image.jpeg"
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <Header />
            <br />
            <hr style={{ borderWidth: "20px", margin: "0 100px 0 100px" }} />

            {/* <Footer /> */}
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
                    <h2 style={{ textAlign: "center" }}>About Us</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem repudiandae voluptas magnam facere delectus. Commodi unde inventore, ex repellendus voluptatibus, eaque voluptas repellat eos eveniet aperiam, consequuntur similique doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum itaque natus similique ex saepe voluptatum repudiandae perferendis, eos in nobis ipsa dolores at praesentium minus nihil molestias. Pariatur, voluptatibus perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit natus qui, impedit cum neque nostrum soluta expedita saepe accusamus nesciunt, voluptate, voluptatibus accusantium optio deserunt dolorum recusandae ea ullam.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
}