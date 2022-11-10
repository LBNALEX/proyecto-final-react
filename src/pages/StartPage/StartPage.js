import { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper.js";
import { useFetch } from "../../hooks/useFetch.js";
import './StartPage.css';

const CARDS_PER_PAGE = 12;

const StartPage = () => {
    const [characters] = useFetch();
    const [datosApi,setDatosApi] = useState(characters);

    const prevHandler = () =>{
      console.log("prev");
    }
    const nextHandler = () =>{
      console.log("next");
    }
    console.log(characters);
    // if (loading) {
    //     return <Loading/>
    // }
  return (
    <div>          
        <Wrapper items={characters} nextHandler={nextHandler} prevHandler={prevHandler} currentPage={0} />
    </div>
  )
}


export default StartPage;