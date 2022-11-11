import { useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper/Wrapper.js";
import { useFetch } from "../../hooks/useFetch.js";
import './StartPage.css';

const CARDS_PER_PAGE = 4;

const StartPage = () => {
  const [characters,loading] = useFetch();
      useEffect(() => {
      if (loading) {
        return "Cargando..."
    }
    }, []);
    
    const [datosApi,setDatosApi] = useState(characters);
    const [items,setItems] = useState([...datosApi].splice(0,CARDS_PER_PAGE));
    const [currentPage,setCurrentPage] = useState(0);

    console.log(datosApi);
  
  const prevHandler = () =>{
    const prevPage = currentPage -1;
    if(prevPage <0) return;
    const firstIndex = prevPage * CARDS_PER_PAGE;
    setItems([...datosApi].splice(firstIndex,CARDS_PER_PAGE));
    setCurrentPage(prevPage);
  }
  const nextHandler = () =>{
    const totalElementos = items.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * CARDS_PER_PAGE;

    if(firstIndex === totalElementos) return;
    setItems([...datosApi].splice(firstIndex,CARDS_PER_PAGE));
    setCurrentPage(nextPage);
  }

  return (
    <div>          
        <Wrapper items={characters} nextHandler={nextHandler} prevHandler={prevHandler} currentPage={currentPage} />
    </div>
  )
}


export default StartPage;