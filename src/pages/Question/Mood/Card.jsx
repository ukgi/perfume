import React from "react";
import styles from "./Mood.module.css";
export default function Card({ info }) {
  const { img, desc } = info;
  return (
    <div className={styles.box}>
      <div className={styles.imgBx}>
        <img className={styles.img} src={img} alt='' />
      </div>
      <div className={styles.content}>
        <p>{desc}</p>
      </div>
    </div>
  );
}
