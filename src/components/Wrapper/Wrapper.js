import React from "react";
import './Wrapper.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import backImage from '../../img/fondotorneo.jpg';

const estilo = {
    objectFit: "contain",
    backgroundImage: `url(${backImage})`
}

const Wrapper = (props) => {
    const items = props.items.map((item, index) => {
        return (

            <Card sx={{ maxWidth: 300 }} className="espaciadoarriba" key={item.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image={item.imageUrl}
                        alt={item.name}
                        style={estilo}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            <h3><span>Especie:</span>{item.specie}</h3>
                            <h3><span>Rol: </span>{item.role}</h3>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })

    return (
        <>
            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler}>Next</button>
            <div className="cards-container">
                 {items}  
            </div>
        </>
    )
}

export default Wrapper;