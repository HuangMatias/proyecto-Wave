import './cart-modal.css';

export const CartModal = ({ items, closeModal }) => {
    return (
        <div className='cart-modal-container' onClick={closeModal}>
            <div className="modal-contaier">
                <h3>Pendiente.. mostrar carrito</h3>
            </div>
        </div>
    )
}
