import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import image from "../assets/header-image.jpeg"

export default function CardComponent({ name, about, address }) {

    function formatAbout(about) {
        return (
            about.substring(0, 60) + "..."
        )
    }

    // function handleDelete() {
    //     dispatch({ type: ACTIONS.DELETE_HOTEL })
    //     axios.delete(`http://localhost:8000/hotels/${id}`)
    // }

    return (
        <>
            <Card sx={{ flexgrow: 1 }}>
                <CardActionArea href= {`/details/`}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatAbout(about)}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            <span style={{ color: "red" }}>Address :</span>  <span style={{ color: "green" }}>{address}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Divider variant="middle"/>

                <CardActions>
                    <Button size="small" variant="contained" color="success">
                        Update
                    </Button>
                    <Button size="small" variant="contained" color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}