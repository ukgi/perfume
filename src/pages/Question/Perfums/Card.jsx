import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Perfums.module.css";

export default function Card({ info }) {
  const { title, desc, img, alt, backgroundColor } = info;
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate("/mood", { state: { title, alt } })}
    >
      <img className={styles.cardImg} src={img} alt={alt} />
      <div
        className={styles.cardIntro}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
}
