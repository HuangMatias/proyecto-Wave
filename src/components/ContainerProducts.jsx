import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { default_produc_list } from '../api/default_response'
import ListProducts from './ListProducts'


const ContainerProducts = () => {

    const {state} = useContext(AppContext)

        {JSON.stringify(state.products)}
        
        const productsfilter = state.products.filter((product) => product.id < 5)
    


    return (
        <div className='container-products'>
            {
                productsfilter.map(product => (
                    <ListProducts 
                    name={product.name}
                    price={product.price} 
                    url = {product.image_url}
                    key={product.id} 
                    />
                ))
            }
        </div>
    )
}

export default ContainerProducts