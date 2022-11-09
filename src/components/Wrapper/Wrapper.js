import React from "react";
import './Wrapper.css';

const Wrapper = (props) => {
    const items = props.items.map((item,index) =>{
        return <li key={item.id} > {item.name}</li>
    })

    return <div>
        <div className="contenidoPrincipal">
            <br></br>
            <br></br>
        <h2>Datos api</h2>
        <ul>
            {items}
        </ul>
    </div>
        </div>
        
}

export default Wrapper;