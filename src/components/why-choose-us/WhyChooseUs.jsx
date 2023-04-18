import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './why-choose-us.css'


export const WhyChooseUs = () => {
    return (
        <div className="container mt-3 mb-3 container-component">
            <div className="title">
            <h3>POR QUÉ ELEGIR <span>NUESTRA</span> ROPA</h3>
            </div>
            <section className="container-section">
                <div className="list-container">
                        <p><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /><span> Manejamos la mejor tela del mercado</span></p>
                        <p><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /><span> Precios accesibles</span></p>
                        <p><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /><span> Envío de 1 a 2 días hábiles</span></p>
                        <p><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize:'40px' }} /><span> Todo tipo de talles</span></p>
                </div>
                <div className="image-container">
                    <img src="https://res.cloudinary.com/wave-project/image/upload/v1679446740/BUZO_CHEMISTRY_umjiit.webp" alt="Why choose us?" />
                </div>
            </section>
        </div>
    );
}
