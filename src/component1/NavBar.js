import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-two"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Card
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-three"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Empty2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-four"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Log in/Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
