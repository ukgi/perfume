import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mood.module.css";

export default function Card({ info }) {
  const { img, desc } = info;
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate("/season")}>
      <img className={styles.faceFront} id={styles.front} src={img} alt='' />
      <div className={styles.faceBack} id={styles.back}>
        <div className={styles.backMoodDescContainer}></div>
        <p className={styles.moodDesc}>{desc}</p>
      </div>
    </div>
  );
}
