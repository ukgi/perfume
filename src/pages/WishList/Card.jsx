import React from "react";
import styles from "./Card.module.css";

export default function Card({ perfume }) {
  const { perfumeName, brandName, perfumeImageUrl } = perfume;

  return (
    <div className={styles.card}>
      <img
        className={styles.perfumeImg}
        src={perfumeImageUrl}
        alt='perfumeImage'
      />
      <div className={styles.textBox}>
        <h5 className={styles.brandName}>{brandName}</h5>
        <h3 className={styles.perfumeName}>{perfumeName}</h3>
      </div>
      <button className={styles.deleteBtn}>삭제하기</button>
    </div>
  );
}
