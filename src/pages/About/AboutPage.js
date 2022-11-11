import './AboutPage.css';
import akira from '../../img/akira.jpg';
function AboutPage() {
    return (
        <>
            <div className="fondo">
                <div className="contenido">
                    <div className="contenedorMangaka">
                        <h1 className="titulo">Dragon Ball</h1>
                        <img src={akira} className="mangaka" alt='Akira Toriyama '></img>
                    </div>
                    <div>
                        <p className='formatoInfo'>Dragon Ball es un manga escrito e ilustrado por Akira Toriyama.
                           Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995.          
                        </p> 
                        <p className='formatoInfo'>
                        Su trama describe las aventuras de Gokū, un guerrero saiyajin, experto en artes marciales que en su infancia inicia sus viajes 
                        y aventuras en las que pone a prueba y mejora sus habilidades de pelea, enfrentando oponentes y protegiendo a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad. 
                        </p>
                        <p className='formatoInfo'>
                        El manga tuvo 519 capítulos impresos recopilados en 42 volúmenes.
                        Dos años después de su lanzamiento, Toei Animation estrenó una adaptación anime que abarcó aproximadamente la primera mitad de la obra. Una vez concluida su transmisión en 1989 por el canal Fuji Television en Japón, Toei estrenó una continuación titulada Dragon Ball Z,
                        Dragon Ball GT se estrenó en 1996 pero sin la participación de Toriyama.
                        En 2015 comenzó a emitirse Dragon Ball Super en Fuji Television, anime que continúa los sucesos de Dragon Ball Z.
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;