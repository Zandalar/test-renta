import React from 'react';
import { useSelector } from 'react-redux';

function InfoTooltip({ isOpen, onClose, isolatePopup }) {
  const basketPriceCounter = useSelector((state) => state.basketPriceCounter.basketPriceCounter);
  const basketProductsList = useSelector((state) => state.orderBasket.productsList);

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__info' onClick={onClose}>
      <div className='popup__container' onClick={isolatePopup}>
        <button className='popup__btn' type='button' onClick={onClose} />
        <p className='popup__message'>{`Ваш заказ на сумму: ${basketPriceCounter}`} &#8381;</p>
        {basketProductsList.map((item) => {
          return (
            <p className='popup__message'>{`${item.name} x ${item.count}`}</p>
          )
        })}
      </div>
    </div>
  )
}

export default InfoTooltip;
