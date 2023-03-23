import { useContext, useEffect } from 'react';

import { getProducts } from './api/products';
import { AppContext } from './context/AppContext';

function App() {
    const {dispatch} = useContext(AppContext)
    useEffect(() => {
        getProducts().then((products) => {
            dispatch({type: 'FILL_PRODUCT_LIST', payload: products})
    
        });
    
    }, [dispatch])
    

    return (
        <>
            <div></div>
        </>
    );
}

export default App;
