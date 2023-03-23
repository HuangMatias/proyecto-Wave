import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { shoppingInitialState ,  shoppingReducer } from '../../reducers/ShoppingReducer'

const Homepage = () => {

  const { state, dispatch } = useContext(AppContext);


  const addToCart = (id) => {
    dispatch( { type : TYPES.ADD_TO_CART , payload : id } )
  }

  const removeOneCart = (id) =>{
    dispatch( { type : TYPES.REMOVE_ONE_CART , payload : id } )
  }

  const removeAllProducts = (id) => {
    dispatch ( { type : TYPES.REMOVE_ALL_PRODUCT , payload : id } )
  }

  const clearCart = () => {
    dispatch( { type : TYPES.CLEAR_CART })
  }


  const { products , cart , counter} = shoppingInitialState;

  

  return (
    <div>
      Homepage
    </div>
  )
}

export default Homepage