// import { useReducer } from 'react'
// import { useContext } from 'react'
// import { AppContext } from '../../context/AppContext'
// import { TYPES } from '../../reducers/actions/actions_shopping'
import Header from '../header/Header';
import Footer from "../footer/Footer"
import LatestOffers from '../layouts/LatestOffers';
import Hero from '../hero/Hero';
import { WhyChooseUs } from '../why-choose-us/WhyChooseUs';

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