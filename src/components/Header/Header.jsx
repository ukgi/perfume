import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href='/'>
        <img
          className={styles.logo}
          src='/assets/images/Logo/Logo.png'
          alt=''
        />
      </a>
    </header>
  );
}
