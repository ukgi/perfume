import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./DataRecommender.module.css";

export default function DataRecommender() {
  const { state } = useLocation();
  const { recommender, perfume, comment } = state;

  console.log(comment);

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{recommender}님이 추천하는 향수입니다</h2>
      <div className={styles.perfumeList}>
        <h3>{perfume.perfumeName}</h3>
        <p>{perfume.perfumeFeature}</p>
        <img
          className={styles.perfumeImage}
          src={perfume.perfumeImageUrl}
          alt=''
        />
        <div className={styles.commentBox}>
          <div className={styles.balloon}>{comment}</div>
        </div>
      </div>
    </div>
  );
}
