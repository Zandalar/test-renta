import React from 'react';
import logo from '../images/logo.svg';
import emptyBasket from '../images/icon__basket.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
        <button className='header__menu' type='button' />
        <div className='header__basket'>
          <p className='header__basket-count'>144 &#8381;</p>
          <img className='header__basket-image' src={emptyBasket} alt='empty basket' />
        </div>
      </div>
    </header>
  )
}

export default Header;