import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDelivery } from '../reducers/delivery';

const Delivery = () => {
  const isDelivery = useSelector((state) => state.delivery.isDelivery);
  const dispatch = useDispatch();

  const setDeliveryOn = () => {
    dispatch(setIsDelivery(true));
  }

  const setDeliveryOff = () => {
    dispatch(setIsDelivery(false));
  }

  return (
    <section className='delivery'>
      <div className='delivery__container'>
        <div className='delivery__block'>
        {isDelivery
          ? <>
              <h2 className='delivery__title'>Доставка г. Москва</h2>
              <form className='delivery__form' name='address'>
                <label className='delivery__label' htmlFor='street'>Улица</label>
                <input className='delivery__input' id='street' type='text' placeholder='Введите улицу' />
                <label className='delivery__label' htmlFor='house'>Дом</label>
                <input className='delivery__input' id='house' type='number' placeholder='Введите номер дома' />
              </form>
            </>
          : null
        }
        </div>
        <div className='delivery__buttons'>
          <button className={`delivery__btn ${isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOn}>Доставка</button>
          <button className={`delivery__btn ${!isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOff}>Самовывоз</button>
        </div>
      </div>
    </section>
  )
}

export default Delivery;