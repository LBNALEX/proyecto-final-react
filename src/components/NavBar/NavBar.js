import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {

  //const menus = [];

  return (
    <>
     <nav className='encabezado-inicio'>
          <img src="/LogoDBZ.png" alt="no logo" className='encabezadologo'></img> 
        <div className='menu'>
        <ul>
            <Link className="menuitem" to="/">
                Inicio
            </Link>
            <Link className="menuitem" to="/about">
              Acerca de Dragon Ball
            </Link>
        </ul>
        </div>
       
     </nav>
    </>
  );
}

export default NavBar;
