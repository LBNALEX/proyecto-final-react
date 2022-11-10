import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const useFetch = () => {
    const [characters, setCharacters] = useState([]);
     //const [loading, setLoading] = useState(false);

     useEffect(() => {
       getCharacter();
     }, []);

    const getCharacter = async () =>{
       // setLoading(true)
        try {
            const res = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");
    
            if (!res.ok) {
                
                return Swal.fire({
                    title: "Error!",
                    text: "No se obtuvieron datos de la API",
                    icon: "error",
                });
            }
           
            const data = await res.json();
            setCharacters([...data]);

            console.log(data);

        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Server Error`,
                icon: "error",
            });
        } finally {
            //setLoading(false)
        }
    }
    
    return [characters]
};
