import Wrapper from "../../components/Wrapper/Wrapper.js";
import { useFetch } from "../../hooks/useFetch.js";

const StartPage = () => {
    const [characters] = useFetch();
    console.log(characters);
    // if (loading) {
    //     return <Loading/>
    // }
  return (
    <div>          
        <Wrapper items={characters} />
    </div>
  )
}


export default StartPage;