import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from "../assets/header-image.jpeg"

export default function CardComponent({ name, about, address, hotelId }) {

    function formatAbout(about) {
        return (
            about.substring(0, 60) + "..."
        )
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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