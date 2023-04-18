import { Button , Modal } from "react-bootstrap";
import {TYPES} from '../../reducers/actions/actions_shopping'
import { AppContext } from "../../context/AppContext";
import { useContext } from 'react';
// import Modalcss from '../../styles/Modal.css'





function ModalCard( { handleClose , show , id } ) {
  
  const {state , dispatch} = useContext(AppContext)

  const addToCartHandler = () => {
    dispatch({type: TYPES.ADD_TO_CART, payload: id})
    handleClose()
  }

  return (
        <Modal className="modal-card" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseas agregar el producto al carrito?</Modal.Body>
        <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
            Cerrar
        </Button>
        <Button variant="success" onClick={addToCartHandler}>
            Agregar al carrito
        </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default ModalCard;