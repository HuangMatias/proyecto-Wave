import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './why-choose-us.css'


export const WhyChooseUs = () => {
    return (
        <div className="container mt-3 container-component">
            <h2 className='title'>POR QUÉ ELEGIR NUESTRA ROPA</h2>
            <section className="container-section">
                <div className="list-container">
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /> Manejamos la mejor tela del mercado</span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /> Precios accesibles</span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /> Envío de 1 a 2 días hábiles</span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /> Todo tipo de talles</span>
                </div>
                <div className="image-container">
                    <img src="https://res.cloudinary.com/wave-project/image/upload/v1679446740/BUZO_CHEMISTRY_umjiit.webp" alt="Why choose us?" />
                </div>
            </section>
        </div>
    );
}
