import React from 'react'
import LatestOfferscss from '../../styles/LatestOffer.css'
import ContainerProducts from '../ContainerProducts'


    const LatestOffers = () => {

    return (
        <div className='container-last-offers'>
            <div className="tittle-last-offers">
                <h3>ULTIMAS <span>OFERTAS</span></h3>
            </div>
            <div>
                <ContainerProducts/>
            </div>
        </div>
    )
}

export default LatestOffers
