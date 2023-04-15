import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  return (
      <div className="container">
        <header className={styles.header}>
          <NavLink to="/">
            <div className={styles.logo}>
              <h1 className={styles.logo__name}>WeAreBuilding</h1>
              <p className={styles.logo__short}>Есть идея - есть WeAreBuilding</p>
            </div>
          </NavLink>
          <nav className={styles.nav}>
            <NavLink>Главная</NavLink>
            <NavLink>Каталог</NavLink>
            <NavLink>Отзывы</NavLink>
            <NavLink>О компании</NavLink>
          </nav>
        </header>
      </div>
  );
};

export default Header;
