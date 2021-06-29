import React from 'react';
import logo from '../images/logo.svg';
import emptyBasket from '../images/icon__basket.svg';
import { useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';

const Header = ({ handleBasketClick, windowWidth, scrollHeight }) => {
  const basketPriceCounter = useSelector((state) => state.basketPriceCounter.basketPriceCounter);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <header className={`header ${windowWidth < 1100 && scrollHeight > 92 ? 'header_fixed' : ''}`}>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
        <button className='header__menu' type='button' onClick={handleMenuClick}/>
        <button className='header__basket' onClick={handleBasketClick} >
          <p className='header__basket-count'>{basketPriceCounter} &#8381;</p>
          <img className='header__basket-image' src={emptyBasket} alt='empty basket' />
        </button>
      </div>
      <MobileMenu handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
    </header>
  )
}

export default Header;