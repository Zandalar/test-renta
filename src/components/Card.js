import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { setBasketPriceCounter} from '../reducers/basketPriceCounter';
import { setProductsList, increaseProductCount, decreaseProductCount, setConfirmOrder, resetProductList } from '../reducers/orderBasket';
import burger from '../images/burger.png';

const Card = ({ data, sectionType }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isOrderCounterShown, setIsOrderCounterShown] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const basketPriceCounter = useSelector((state) => state.basketPriceCounter.basketPriceCounter);
  const isDelivery = useSelector((state) => state.delivery.isDelivery);
  const confirmedOrder = useSelector((state) => state.orderBasket.confirmOrder);
  const dispatch = useDispatch();

  const onHoverCard = () => {
    setIsCardHover(true);
  }

  const onLeaveCard = () => {
    setIsCardHover(false);
  }

  const onCounterClick = () => {
    setIsOrderCounterShown(true);
    dispatch(setProductsList({name: data.name, count: productCount}));
    dispatch(setBasketPriceCounter(basketPriceCounter + data.price));
  }

  const increaseCounter = () => {
    setProductCount(productCount + 1);
    dispatch(increaseProductCount(data.name))
    dispatch(setBasketPriceCounter(basketPriceCounter + data.price));
  }

  const decreaseCounter = () => {
    setProductCount(productCount - 1);
    dispatch(decreaseProductCount(data.name))
    dispatch(setBasketPriceCounter(basketPriceCounter - data.price));
    if (productCount < 2) {
      setIsOrderCounterShown(false);
      setProductCount(1);
      dispatch(resetProductList());
    }
  }

  useEffect(() => {
    setProductCount(1);
    setIsOrderCounterShown(false);
    dispatch(setBasketPriceCounter(0));
    dispatch(setConfirmOrder(false));
  }, [isDelivery, dispatch, confirmedOrder])

  return (
    <li
      className={`card${isCardHover ? ((sectionType === 'section') ? ' card_active-grey' : ' card_active') : ''}`}
      id={data._id}
      onMouseOver={onHoverCard}
      onMouseLeave={onLeaveCard}
    >
      <LazyLoad>
        <img className={!isCardHover ? 'card__image' : 'card__image card__image_active'} src={data.img ? data.img : burger} alt={data.name} />
      </LazyLoad>
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