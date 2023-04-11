import { Button , Modal } from "react-bootstrap";
// import Modalcss from '../../styles/Modal.css'



function ModalCard( { handleClose , show } ) {
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
        <Button variant="success" onClick={handleClose}>
            Agregar al carrito
        </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default ModalCard;