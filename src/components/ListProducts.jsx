import React from 'react'
// import Productscss from '../styles/Products.css'
import ModalCard from './modal/ModalCard'
import { useState } from 'react'

const ListProducts = ( { name , price , url } ) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <><div>
            <div className='container-card'>
                <div className='images-product'>
                    <img src={url} />
                </div>
                <div className='tittle-product'>
                    <h3>{name}</h3>
                </div>
                <div className='price-product'>
                    <p> ${price}</p>
                </div>
                <div className='button-product'>
                    <button onClick={handleShow}>AGREGAR AL CARRITO</button>
                </div>
                <ModalCard 
                    handleClose={handleClose}
                    show={show}
                />
            </div>
        </div>
        </>
  )
}
export default ListProducts
