import { useContext, useEffect } from 'react';

import { getProducts } from './api/products';
import Homepage from './components/pages/Homepage';
import { AppContext } from './context/AppContext';
import {TYPES} from './reducers/actions/actions_shopping'

function App() {
    const {dispatch} = useContext(AppContext)
    useEffect(() => {

        getProducts().then((products) => {
            dispatch({type: TYPES.FILL_PRODUCT_LIST, payload: products})
    
        });
    
    }, [dispatch])
    

    return (
        <>
            <Homepage/>
        </>
    );
}

export default App;
