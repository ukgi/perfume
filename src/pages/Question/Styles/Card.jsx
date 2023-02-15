import React from "react";
import styles from "./Styles.module.css";

export default function Card({ style }) {
  const { title, img } = style;
  return (
    <div className={styles.box}>
      <h3 className={styles.cardOneTitle}>{title}</h3>
      <img className={styles.img} src={img} alt='' />
    </div>
  );
}
