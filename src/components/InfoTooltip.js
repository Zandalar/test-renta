import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo_xl.svg';

const InfoTooltip = ({ isOpen, onClose, isolatePopup }) => {
  const basketPriceCounter = useSelector((state) => state.basketPriceCounter.basketPriceCounter);
  const basketProductsList = useSelector((state) => state.orderBasket.productsList);

  const confirmOrder = () => {
    onClose();
    console.log(basketProductsList);
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__info' onClick={onClose}>
      <div className='popup__container' onClick={isolatePopup}>
        <img className='popup__logo' src={logo} alt='logo' />
        <button className='popup__btn popup__btn_close' type='button' onClick={onClose} />
        <p className='popup__message'>{`Ваш заказ на сумму: ${basketPriceCounter}`} &#8381;</p>
        {basketProductsList.map((item, index) => {
          return (
            <p className='popup__message' key={index}>{`${item.name} x ${item.count}`}</p>
          )
        })}
        <button className='popup__btn popup__btn_confirm' type='button' onClick={confirmOrder}>Подтвердить заказ</button>
      </div>
    </div>
  )
}

export default InfoTooltip;
