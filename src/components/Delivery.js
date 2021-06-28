import React, {useEffect} from 'react';
import useValidator from '../hooks/useValidator';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDelivery } from '../reducers/delivery';
import { setIsValid } from '../reducers/validation';

const Delivery = ({ windowWidth }) => {
  const { values, errors, isValid, handleChange } = useValidator();
  const isDelivery = useSelector((state) => state.delivery.isDelivery);
  const dispatch = useDispatch();

  const setDeliveryOn = () => {
    dispatch(setIsDelivery(true));
  }

  const setDeliveryOff = () => {
    dispatch(setIsDelivery(false));
  }

  useEffect(() => {
    dispatch(setIsValid(isValid))
  }, [isValid, dispatch])

  return (
    <section className='delivery'>
      <div className='delivery__container'>
        {windowWidth < 1100
          ? <div className='delivery__buttons'>
              <button className={`delivery__btn ${isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOn}>Доставка</button>
              <button className={`delivery__btn ${!isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOff}>Самовывоз</button>
            </div>
          : null
        }
        <div className='delivery__block'>
        {isDelivery
          ? <>
              <h2 className='delivery__title'>Доставка г. Москва</h2>
              <form className='delivery__form' name='address'>
                <div className='delivery__inputs'>
                  <label className='delivery__label' htmlFor='street'>Улица</label>
                  <input
                    className='delivery__input'
                    id='street'
                    name='street'
                    type='text'
                    value={values.street || ''}
                    minLength='5'
                    onChange={handleChange}
                    placeholder='Введите улицу'
                    required
                  />
                  <span className={`delivery__input-error ${errors.street && 'delivery__input-error_active'}`}>
                    {errors.street || ''}
                  </span>
                </div>
                <div className='delivery__inputs'>
                  <label className='delivery__label' htmlFor='house'>Дом</label>
                  <input
                    className='delivery__input'
                    id='house'
                    name='house'
                    type='number'
                    value={values.house || ''}
                    onChange={handleChange}
                    placeholder='Введите номер дома'
                    required
                  />
                  <span className={`delivery__input-error ${errors.house && 'delivery__input-error_active'}`}>
                    {errors.house || ''}
                  </span>
                </div>
              </form>
            </>
          : null
        }
        </div>
        {windowWidth >= 1100
          ? <div className='delivery__buttons'>
            <button className={`delivery__btn ${isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOn}>Доставка</button>
            <button className={`delivery__btn ${!isDelivery ? 'delivery__btn_active' : ''}`} type='button' onClick={setDeliveryOff}>Самовывоз</button>
          </div>
          : null
        }
      </div>
    </section>
  )
}

export default Delivery;