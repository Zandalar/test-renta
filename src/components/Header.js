import React from 'react';
import logo from '../images/logo.svg';
import emptyBasket from '../images/icon__basket.svg';
import { useSelector } from 'react-redux';

const Header = ({ handleBasketClick }) => {
  const basketPriceCounter = useSelector((state) => state.basketPriceCounter.basketPriceCounter);
  const isDeliveryValid = useSelector((state) => state.validation.isValid);
  const isDelivery = useSelector((state) => state.delivery.isDelivery);

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
        <button className='header__menu' type='button' />
        <button className='header__basket' onClick={handleBasketClick} disabled={!isDeliveryValid && isDelivery && true}>
          <p className='header__basket-count'>{basketPriceCounter} &#8381;</p>
          <img className='header__basket-image' src={emptyBasket} alt='empty basket' />
        </button>
      </div>
    </header>
  )
}

export default Header;