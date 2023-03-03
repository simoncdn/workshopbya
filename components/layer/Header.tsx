import React from "react";
import styles from "../../styles/styles";

export default function Header() {
  return (
    <div className={`${styles.boxWidth} ${styles.flexBetween}`}>
      <div className="logo bg-green-100">
        <h1>logo</h1>
      </div>

      <nav className="navbar bg-red-100 flex flex-row">
        \<p>About</p>
        <p>Services</p>
        <p>Blog</p>
        <p>Contact</p>
      </nav>
    </div>
  );
}
