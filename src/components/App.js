import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../utils/api';
import Header from './Header';
import Delivery from './Delivery';
import Categories from './Categories';
import { setCategoriesArr } from '../reducers/categories';
import { setProductsArr } from '../reducers/products';
import { setOrderCounter } from '../reducers/orderCounter';


function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const dispatch = useDispatch();

  function updateHeight() {
    setScrollHeight(window.pageYOffset);
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
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', updateHeight);
    return () => {
      document.removeEventListener('scroll', updateHeight);
    };
  });

  return (
    <div className="app">
      <Header />
      <Delivery />
      <Categories isLoading={isLoading} scrollHeight={scrollHeight} />
    </div>
  );
}

export default App;
