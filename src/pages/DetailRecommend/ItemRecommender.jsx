import React from "react";
import styles from "./RecommendDetail.module.css";
import { BiRightArrow } from "react-icons/bi";

export default function ItemRecommender({ recommender, index }) {
  return (
    <li className={styles.recommenderItem}>
      <div>
        <span className={styles.number}>{index + 1}</span>
        <span className={styles.name}>{recommender.recommender}</span>
      </div>
      <span className={styles.badge}>
        <BiRightArrow />
      </span>
    </li>
  );
}
