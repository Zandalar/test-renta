import React from 'react';

const Delivery = () => {
  return (
    <section className='delivery'>
      <div className='delivery__container'>
        <h2 className='delivery__title'>Доставка г. Москва</h2>
        <div className='delivery__buttons'>
          <button className='delivery__btn delivery__btn_active' type='button'>Доставка</button>
          <button className='delivery__btn' type='button'>Самовывоз</button>
        </div>
        <form className='delivery__form' name='address'>
          <label className='delivery__label' htmlFor='street'>Улица</label>
          <input className='delivery__input' id='street' type='text' placeholder='Введите улицу' />
          <label className='delivery__label' htmlFor='house'>Дом</label>
          <input className='delivery__input' id='house' type='number' placeholder='Введите номер дома' />
        </form>
      </div>
    </section>
  )
}

export default Delivery;