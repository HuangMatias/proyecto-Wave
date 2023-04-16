import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/WC-logo.jpg';
import { AppContext } from '../../context/AppContext';

import './style.css';
import { CartModal } from '../cart-modal/CartModal';

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
	const [showCart, setShowCart] = useState(false)

	const handleShowCart = () => {
		setShowCart(!showCart)
	}
    return (
        <header>
            <div className='logo'>
                {<img src={Logo} alt='logo' />}

                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <i className='fa-solid fa-bars fa-xl'></i>
                </button>
            </div>
            <div className='barra'>
                <nav className='seccion'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Productos</a>
                        </li>
                    </ul>
                </nav>
                <div className='carrito' onClick={handleShowCart}>
                    <span className='cart-badge'>{cart.length}</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
			{showCart && <CartModal items={cart} closeModal={handleShowCart}/>}
        </header>
    );
};

export default Header;
