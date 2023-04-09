import React from 'react';
import segundoLogo from './logoImage/segundo-logo.jpg'
import arroba from './logoImage/arroba.png'
import ubicacion from './logoImage/ubicacion.png'
import PayshipsList from './PayshipsList'
import facebook from './logoImage/facebook.png'
import instagram from './logoImage/instagram.png'
import tiktok from './logoImage/tik-tok.png'


const IMAGES = [
    'http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png',
    'http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png',
    'https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png'
]

const Footer = () => {
    return (
       <footer className = 'text-white bg-secondary'>
        <div className = 'container-fluid'>
            <div className = 'row p-4'>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <img src= {segundoLogo} alt='logo' className = 'rounded' height={200} ></img>
                </div>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <p className = 'h5'>Medios de Pago</p>
                        <div className= 'd-flex flex-wrap  justify-content-start gap-2'>
                            <PayshipsList source={IMAGES} />
                        </div>
                </div>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <p className = 'h5'>Contactanos</p>
                        <p>
                            <img className = 'm-1' src={arroba} alt= 'arroba' key={"arroba"} width={30} /> contacto@waveclothes.com
                            <br></br>
                            <img className = 'm-1' src={ubicacion} alt='ubicacion' key={"ubicacion"} width={30} /> Buenos Aires, Argentina
                        </p>
                </div>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <p className = 'h5'>Redes Sociales</p>
                        <ul className='list unstiled'>
                            <li className ='d-flex gap-3'>
                                    <img src={facebook} alt='facebook' key={"facebook"} width={30} />
                                    <img src={instagram} alt='instagram' key={"instagram"} width={30} />
                                    <img src={tiktok} alt='tik-tok' key={"tik-tok"} width={30} />
                            </li>

                        </ul>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row-fluid lead text-uppercase text-center'>
                <h6>Copyright wave clothes | Tienda online oficial - 2023 Todos los Derechos Reservados.</h6>
            </div>

        </div>
       </footer>
    )
};
export default Footer;