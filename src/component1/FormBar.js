import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const FormBar = () => {
  return (
    <div>
      <h2>Do u have an account?</h2>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="./members"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                <button>Yes</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./newMember"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                <button>No</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FormBar;
