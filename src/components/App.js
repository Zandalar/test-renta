import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../utils/api';
import Header from './Header';
import Delivery from './Delivery';
import Categories from './Categories';
import Footer from './Footer';
import InfoTooltip from './InfoTooltip';
import { setCategoriesArr } from '../reducers/categories';
import { setProductsArr } from '../reducers/products';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const updateHeight = () => {
    setScrollHeight(window.pageYOffset);
  }

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const isolatePopup = (evt) => {
    evt.stopPropagation();
  }

  const closeAllPopups = () => {
    setIsInfoTooltipPopupOpen(false);
  }

  const handleEscClick = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  const handleBasketClick = () => {
    setIsInfoTooltipPopupOpen(true);
  }

  useEffect(() => {
    setIsLoading(true);
    const promises = [api.getCategories(), api.getProducts()];
    Promise.all(promises)
      .then((res) => {
        const [categoriesList, productsList] = res;
        dispatch(setCategoriesArr(categoriesList));
        dispatch(setProductsArr(productsList));
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
      .finally(() => setIsLoading(false))
  }, [dispatch])

  useEffect(() => {
    document.addEventListener('scroll', updateHeight);
    window.addEventListener('resize', updateWidth);
    window.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('scroll', updateHeight);
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  return (
    <div className="app">
      <Header handleBasketClick={handleBasketClick} windowWidth={windowWidth} scrollHeight={scrollHeight} />
      <Delivery windowWidth={windowWidth} />
      <Categories isLoading={isLoading} scrollHeight={scrollHeight} windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        isolatePopup={isolatePopup}
      />
    </div>
  );
}

export default App;
