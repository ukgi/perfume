import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Season.module.css";

export default function Card({ season }) {
  const { seasonTitle, color, img } = season;
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate("/styles")}>
      <div className={styles.circle} style={{ backgroundColor: color }}>
        <h3>{seasonTitle}</h3>
      </div>
      <div className={styles.content}>
        <img className={styles.img} src={img} alt=''></img>
      </div>
    </div>
  );
}
