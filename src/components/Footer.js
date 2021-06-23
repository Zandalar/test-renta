import React from 'react';
import logo from '../images/logo_xl.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={logo} alt='logo' />
      <div className='footer__container'>
        <ul className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 1</h2>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
        </ul>
        <ul className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 2</h2>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
        </ul>
        <div className='footer__image' />
        <ul className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 3</h2>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
        </ul>
        <ul className='footer__nav'>
          <h2 className='footer__nav-title'>Раздел 4</h2>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
          <li className='footer__nav-item'>Подраздел</li>
        </ul>
      </div>
      <div className='footer__social'>
        <ul className='footer__social-list'>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_vk' href='https://vk.com/' target='_blank' rel='noreferrer' />
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_fb' href='https://facebook.com/' target='_blank' rel='noreferrer' />
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_twitter' href='https://twitter.com/' target='_blank' rel='noreferrer' />
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-link footer__social-link_ok' href='https://ok.ru/' target='_blank' rel='noreferrer' />
          </li>
        </ul>
        <div className='footer__download'>
          <a className='footer__download-link footer__download-link_google' href='https://play.google.com/store' target='_blank' rel='noreferrer' />
          <a className='footer__download-link footer__download-link_apple' href='https://www.apple.com/ru/app-store' target='_blank' rel='noreferrer' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;