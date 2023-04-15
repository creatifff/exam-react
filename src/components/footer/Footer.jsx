import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__inner}>     
          <div className={styles.footer__column}>
            <h2 className={styles.logo_name}>Flowers Store</h2>
            <NavLink to="mailto:nazyrov_roman@mail.ru">
              nazyrov_roman@mail.ru
            </NavLink>
            <p>пр-т. Победы, 141, Казань, Респ. Татарстан, 420100</p>
          </div>
          <div className={styles.footer__column}>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
