import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandResult.module.css";

export default function Card({ item }) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/brandDetail/${item.id}`, { state: item })}
    >
      <img className={styles.logo} src='/assets/images/Logo/Logo.png' alt='' />
      <img className={styles.perfumeImg} src={item.perfumeImageUrl} alt='' />
      <div className={styles.cardTextBox}>
        <h3 className={styles.cardTitle}>{item.perfumeName}</h3>
        <p>If I could put memories in a bottle like scent</p>
      </div>
    </div>
  );
}
