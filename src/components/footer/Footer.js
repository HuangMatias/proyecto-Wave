import React from 'react';
import segundoLogo from './logoImage/segundo-logo.jpg'
import arroba from './logoImage/arroba.png'
import ubicacion from './logoImage/ubicacion.png'
import PayshipsList from './PayshipsList';


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
            <div className = 'row p-5'>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <img src= {segundoLogo} alt='logo' className = 'h3' height={200}></img>
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
                            <img src={arroba} alt= 'arroba' width={30} /> contacto@waveclothes.com
                            <br></br>
                            <br></br>
                            <img src={ubicacion} alt='ubicacion' width={30} /> Buenos Aires, Argentina
                        </p>
                </div>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                        <p className = 'h5'>Redes Sociales</p>
                </div>
            </div>
        </div>

       </footer> 
    )
};
export default Footer;