import React, {useEffect, useState} from 'react';
import burger from '../images/burger.png';
import { useDispatch, useSelector } from 'react-redux';
import {setOrderCounter} from '../reducers/orderCounter';


const Card = ({ data, sectionType }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isOrderCounterShown, setIsOrderCounterShown] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const counter = useSelector((state) => state.orderCounter.orderCounter);
  const isDelivery = useSelector((state) => state.delivery.isDelivery);
  const dispatch = useDispatch();

  function onHoverCard() {
    setIsCardHover(true);
  }

  function onLeaveCard() {
    setIsCardHover(false);
  }

  function onCounterClick() {
    setIsOrderCounterShown(true);
    dispatch(setOrderCounter(counter + data.price));
  }

  function increaseCounter() {
    setProductCount(productCount + 1);
    dispatch(setOrderCounter(counter + data.price));
  }

  function decreaseCounter() {
    setProductCount(productCount - 1);
    dispatch(setOrderCounter(counter - data.price));
    if (productCount < 2) {
      setIsOrderCounterShown(false);
      setProductCount(1);
    }
  }

  useEffect(() => {
    setProductCount(1);
    setIsOrderCounterShown(false);
    dispatch(setOrderCounter(0));
  }, [isDelivery])

  return (
    <li
      className={`card${isCardHover ? ((sectionType === 'section') ? ' card_active-grey' : ' card_active') : ''}`}
      id={data._id}
      onMouseOver={onHoverCard}
      onMouseLeave={onLeaveCard}
    >
      <img className='card__image' src={burger} alt={data.name} />
      <p className='card__name'>{data.name}</p>
      <p className='card__price'>{data.price} &#8381;</p>
      {data.fresh && <p className='card__badge card__badge_fresh'>Новое</p>}
      {data.hit && <p className='card__badge card__badge_hit'>Хит</p>}
      {isOrderCounterShown
        ? <div className='card__counter'>
          <button className='card__btn card__btn_minus' type='button' onClick={decreaseCounter} />
          <p className='card__counter-value'>{productCount}</p>
          <button className='card__btn card__btn_plus' type='button' onClick={increaseCounter} />
        </div>
        : <button className='card__btn' type='button' onClick={onCounterClick} />
      }
    </li>
  )
}

export default Card;