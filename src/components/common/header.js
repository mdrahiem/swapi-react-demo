import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header className={styles['app-header']}>
      <div className="app-logo">
        <img src={logo} alt="" />
        <p>starwars <span>universe</span></p>
      </div>
    </header>
  );
}

export default Header;
