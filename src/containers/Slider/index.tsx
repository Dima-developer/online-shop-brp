import React from "react";
import Slider from "react-slick";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

type settingsType = {
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number
}

const Slder: React.FC = () => {
    const settings: settingsType = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div>
            <Slider {...settings}>
            <Box>
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
                <Typography component="h3">1</Typography>
            </Box>
            <Box>
                <Typography component="h3">2</Typography>
            </Box>
            <Box>
                <Typography component="h3">3</Typography>
            </Box>
            <Box>
                <Typography component="h3">4</Typography>
            </Box>
            <Box>
                <Typography component="h3">5</Typography>
            </Box>
            <Box>
                <Typography component="h3">6</Typography>
            </Box>
            </Slider>
        </div>
    )
}
export default Slder;