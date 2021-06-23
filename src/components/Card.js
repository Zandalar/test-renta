import React, {useState} from 'react';
import burger from '../images/burger.png';
import { useDispatch, useSelector } from 'react-redux';
import {setOrderCounter} from '../reducers/orderCounter';


const Card = ({ data, sectionType }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isOrderCounterShown, setIsOrderCounterShown] = useState(false);
  const counter = useSelector((state) => state.orderCounter.orderCounter);
  const dispatch = useDispatch();

  function onHoverCard() {
    setIsCardHover(true);
  }

  function onLeaveCard() {
    setIsCardHover(false);
  }

  function onCounterClick() {
    setIsOrderCounterShown(true);
    dispatch(setOrderCounter(counter + 1));
  }

  function increaseCounter() {
    dispatch(setOrderCounter(counter + 1));
  }

  function decreaseCounter() {
    if (counter < 2) {
      setIsOrderCounterShown(false);
    }
    dispatch(setOrderCounter(counter - 1));
  }

  return (
    <li className={`card${isCardHover ? ((sectionType === 'section') ? ' card_active-grey' : ' card_active') : ''}`} id={data._id} onMouseOver={onHoverCard} onMouseLeave={onLeaveCard}>
      <img className='card__image' src={burger} alt={data.name} />
      <p className='card__name'>{data.name}</p>
      <p className='card__price'>{data.price} &#8381;</p>
      {data.fresh && <p className='card__badge card__badge_fresh'>Новое</p>}
      {data.hit && <p className='card__badge card__badge_hit'>Хит</p>}
      {isOrderCounterShown
        ? <div className='card__counter'>
          <button className='card__btn card__btn_minus' type='button' onClick={decreaseCounter} />
          <p className='card__counter-value'>{counter}</p>
          <button className='card__btn card__btn_plus' type='button' onClick={increaseCounter} />
        </div>
        : <button className='card__btn' type='button' onClick={onCounterClick} />
      }
    </li>
  )
}

export default Card;