import React from 'react';
import segundoLogo from './logoImage/segundo-logo.jpg'
import arroba from './logoImage/arroba.png'
import ubicacion from './logoImage/ubicacion.png'
import PayshipsList from './PayshipsList'
import facebook from './logoImage/facebook.png'
import instagram from './logoImage/instagram.png'
import tiktok from './logoImage/tik-tok.png'
import avion from './logoImage/avion.png'


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
       <footer className = 'text-white bg-secondary pt-4'>
        <div className = 'container-fluid'>
            <div className = 'row p-4'>
                <div className = 'col-xs-12 col-md-6 col-lg-3'>
                       <a href='#'><img src= {segundoLogo} alt='logo' className = 'rounded img-fluid' style={{maxHeight:'200px'}} ></img></a> 
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
                                <a href='https://es-la.facebook.com/' target={'_blank'}><img src={facebook} alt='facebook' width={30} /></a>
                                <a href='https://www.instagram.com/' target={'_blank'}><img src={instagram} alt='instagram' width={30} /></a>
                                <a href='https://www.tiktok.com/search?q=ropa&t=1681073909637' target={'_blank'}><img src={tiktok} alt='tik-tok'  width={30} /></a>       
                            </li>
                        </ul>
                        <div className='mt-4 text-uppercase col-foot'> <span><strong>Noticias</strong></span>
                       <div className='input-group'>
                       <input type="text" className="col-auto border-box form-control" placeholder='Email'      name="email" label="Email"></input>
                        <button className='btn btn-outline-dark' onClick={() => alert("Te informaremos de las ultimas novedades!")}><img src={avion} alt='icono-enviar' width={30} /> </button>
                        </div> 
                        </div>
                        
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