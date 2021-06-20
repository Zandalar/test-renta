import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from './Preloader';
import Section from './Section';

const Categories = ({ isLoading }) => {
  const categoriesArr = useSelector((state) => state.categories.categoriesArr);

  return (
    <section className='categories'>
      <ul className='categories__menu'>
        {isLoading
          ? <Preloader />
          : categoriesArr.map(item => {
            return (
              <li className='categories__menu-item' key={item._id} id={item._id}>{item.name}</li>
            )
          })
        }
      </ul>
      {isLoading
        ? <Preloader />
        : categoriesArr.map(item => {
          if (item.products.length !== 0) {
            return (
              <Section key={item._id} data={item} isLoading={isLoading} />
            )
          }
        })
      }
    </section>
  )
}

export default Categories;