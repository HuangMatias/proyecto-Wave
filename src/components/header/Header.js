import React from 'react';
import Logo from '../../images/WC-logo.jpg';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header>
      <div className ="logo"> 
        {<img src={Logo} alt="logo" />}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>

      </div>
      <div className="barra">
        <nav className="seccion"> 
          <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Productos</a></li>
          </ul>
        </nav>
        <div className='carrito'>
         <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  )
}

export default Header
