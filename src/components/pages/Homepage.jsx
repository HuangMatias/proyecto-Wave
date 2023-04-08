// import { useReducer } from 'react'
// import { useContext } from 'react'
// import { AppContext } from '../../context/AppContext'
// import { TYPES } from '../../reducers/actions/actions_shopping'
import { HeroComponet } from "./HeroComponet"
const Homepage = () => {
  // const { state, dispatch } = useContext(AppContext);

  // const addToCart = (id) => {
  //   dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  // }

  // const removeOneCart = (id) => {
  //   dispatch({ type: TYPES.REMOVE_ONE_CART, payload: id })
  // }

  // const removeAllProducts = (id) => {
  //   dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id })
  // }

  // const clearCart = () => {
  //   dispatch({ type: TYPES.CLEAR_CART })
  // }

  return (
    <div>
      {/* Reemplazar con componente Navbar */}

      < HeroComponet />

      {/* Reemplazar con componente "Ultimas Ofertas" */}

      {/* Reemplazar con componente "Por que elegir nuestra ropa" */}

      {/* Reemplazar con componente Fotos instagram/carrousel */}
      
      {/* Reemplazar con componente Footer */}
    </div>
  )
}

export default Homepage