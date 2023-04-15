import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  return (
      <div className="container">
        <header className={styles.header}>
          <NavLink to="/">
            <div className={styles.logo}>
              <h1 className={styles.logo__name}>Flowers Store</h1>
              <p className={styles.logo__short}>Покажи свою любовь</p>
            </div>
          </NavLink>
          <nav className={styles.nav}>
            <NavLink><i class="fa-solid fa-cart-shopping"></i></NavLink>
          </nav>
        </header>
      </div>
  );
};

export default Header;
