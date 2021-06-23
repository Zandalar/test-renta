import React from 'react';
import { useSelector } from 'react-redux';

function InfoTooltip({ isOpen, onClose, isolatePopup }) {
  const counter = useSelector((state) => state.orderCounter.orderCounter);

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__info' onClick={onClose}>
      <div className='popup__container' onClick={isolatePopup}>
        <button className='popup__btn' type='button' onClick={onClose} />
        <p className='popup__message'>{`Ваш заказ на сумму: ${counter}`} &#8381;</p>
      </div>
    </div>
  )
}

export default InfoTooltip;
