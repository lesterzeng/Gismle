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
                to="/project"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cards"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Cards
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/form"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Sign up /log in
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
