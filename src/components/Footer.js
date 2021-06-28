import React from 'react';
import logo from '../images/logo_xl.svg';

const Footer = ({ windowWidth }) => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={logo} alt='logo' />
      {windowWidth < 1100
        ? <div className='footer__image' />
        : null
      }
      <div className='footer__container'>
        <nav className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 1</h2>
          <ul className='footer__menu'>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
          </ul>
        </nav>
        <nav className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 2</h2>
          <ul className='footer__menu'>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
          </ul>
        </nav>
        {windowWidth >= 1100
          ? <div className='footer__image' />
          : null
        }
        <nav className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 3</h2>
          <ul className='footer__menu'>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
          </ul>
        </nav>
        <nav className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 4</h2>
          <ul className='footer__menu'>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
            <li className='footer__menu-item'><a className='footer__menu-link' href='https://google.com'>Подраздел</a></li>
          </ul>
        </nav>
      </div>
      <div className='footer__social'>
        <ul className='footer__social-list'>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_vk' href='https://vk.com/' target='_blank' rel='noreferrer'> </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_fb' href='https://facebook.com/' target='_blank' rel='noreferrer'> </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_twitter' href='https://twitter.com/' target='_blank' rel='noreferrer'> </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_ok' href='https://ok.ru/' target='_blank' rel='noreferrer'> </a>
          </li>
        </ul>
        <div className='footer__download'>
          <a className='footer__download-link footer__download-link_google' href='https://play.google.com/store' target='_blank' rel='noreferrer'> </a>
          <a className='footer__download-link footer__download-link_apple' href='https://www.apple.com/ru/app-store' target='_blank' rel='noreferrer'> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;