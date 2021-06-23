import React from 'react';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import Preloader from './Preloader';
import Section from './Section';

const Categories = ({ isLoading, scrollHeight }) => {
  const categoriesArr = useSelector((state) => state.categories.categoriesArr);

  return (
    <section className='categories'>
      <ul className={`categories__menu${scrollHeight > 450 ? ' categories__menu_fixed' : ''}`}>
        {isLoading
          ? <Preloader />
          : categoriesArr.map((item, index) => {
            return (
              <Link
                to={item._id}
                className='categories__menu-item'
                activeClass='categories__menu-item_active'
                key={index}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.name}
              </Link>
            )
          })
        }
      </ul>
      {isLoading
        ? <Preloader />
        : categoriesArr.map((item, index) => {
          if (item.products.length !== 0) {
            return (
              <Section
                key={index}
                data={item}
                isLoading={isLoading}
                sectionType={(categoriesArr.indexOf(item) % 2 === 0) ? 'section section_grey' : 'section'}/>
            )
          }
          return null;
        })
      }
    </section>
  )
}

export default Categories;