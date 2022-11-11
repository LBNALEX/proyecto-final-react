import React from "react";
import './Wrapper.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import backImage from '../../img/fondotorneo.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const estilo = {
    objectFit: "contain",
    backgroundImage: `url(${backImage})`
}

const Wrapper = (props) => {
    const items = props.items.map((item, index) => {
        return (

            <Card sx={{ maxWidth: 300 }} className="espaciado" key={item.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image={item.avatar}
                        alt={item.name}
                        style={estilo}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        
                            <p className="parrafo">{item.description}</p>
      
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })

    return (
        <>
            <div className="cards-container">
                 {items}  
            </div>
            <Stack direction="row" spacing={2} margin="10px" justifyContent="center">
            <Button variant="contained"  onClick={props.prevHandler}>Prev</Button>
            <Button variant="contained" onClick={props.nextHandler}>Next</Button>
            </Stack>
        </>
    )
}

export default Wrapper;