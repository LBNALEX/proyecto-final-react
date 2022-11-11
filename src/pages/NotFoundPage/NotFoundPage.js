import './NotFoundPage.css';
import notFound from '../../img/NotFound2.png';
function NotFoundPage() {
    return(
        <>
            <div className='fondobody'>
                <div >
                    <img src={notFound} alt="Error - Página no encontrada" className="noPage"/>
                </div>
                <p>
                    Ve a casa, esta página no existe...
                </p>
            </div>
        </>
    );
}

export default NotFoundPage;