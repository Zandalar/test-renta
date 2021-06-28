import React from 'react';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

const MobileMenu = ({ handleMenuClick, isMobileMenuOpened }) => {
  const categoriesArr = useSelector((state) => state.categories.categoriesArr);

  return (
    <section className={isMobileMenuOpened ? 'menu menu_opened' : 'menu'}>
      <button className='menu__btn' onClick={handleMenuClick} />
      <div className='menu__container'>
        <ul className='menu__list'>
          {categoriesArr.map((item, index) => {
            return (
              <li className='menu__list-item' key={index}>
                <Link
                  to={item._id}
                  className='menu__link'
                  activeClass='menu__link_active'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleMenuClick}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default MobileMenu;
