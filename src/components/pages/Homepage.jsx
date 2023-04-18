// import { useReducer } from 'react'
// import { useContext } from 'react'
// import { AppContext } from '../../context/AppContext'
// import { TYPES } from '../../reducers/actions/actions_shopping'
import Header from '../header/Header';
<<<<<<< HEAD
import Footer from "../footer/Footer"
import LatestOffers from '../layouts/LatestOffers';
=======
import Hero from '../hero/Hero';
import Footer from '../footer/Footer'
import { WhyChooseUs } from '../why-choose-us/WhyChooseUs';

>>>>>>> 8d2f9cb9e1f62da41bc070439702c78f128f94fe
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
      <Header/>

      < Hero />

      <LatestOffers/>

      <WhyChooseUs/>

      {/* Reemplazar con componente Fotos instagram/carrousel */}
      <Footer />
    </div>
  );
}

export default Homepage;