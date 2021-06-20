import React from 'react';
import Card from './Card';
import Preloader from './Preloader';
import { useSelector } from 'react-redux';

const Section = ({ data, isLoading }) => {
  const productsArr = useSelector((state) => state.products.productsArr);

  const filteredProducts = data.products.map((item) => {
    return productsArr.find(data => data._id === item)
  })

  return (
    <section className='section' id={data._id}>
      <h2 className='section__title'>{data.name}</h2>
      <ul className='section__container'>
        {isLoading
          ? <Preloader />
          : filteredProducts.map(item => {
            return (
              <Card key={item._id} data={item} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Section;