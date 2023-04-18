import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/WC-logo.jpg';
import { AppContext } from '../../context/AppContext';

import './style.css';
// import { CartModal } from '../cart-modal/CartModal';

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
        setShowCart(!showCart);
    };
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>
                        <img src={Logo} alt='logo' />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                        <ul className='navbar-nav '>
                            <li className='nav-item'>
                                <a className='nav-link active' href='/'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    Productos
                                </a>
                            </li>
                        </ul>
                        <div className='carrito' onClick={handleShowCart}>
                            <span className='cart-badge'>{cart.length}</span>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
                        {/* {showCart && <CartModal items={cart} closeModal={handleShowCart} />} */}
            </nav>
        </>
    );
};

export default Header;
