import React from "react";
import styles from "./RecommendDetail.module.css";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function ItemRecommender({ recommender, index }) {
  const navigate = useNavigate();
  const handleRecommenderData = () =>
    navigate(`/recommendDetail/${recommender.id}`, { state: recommender });

  return (
    <li className={styles.recommenderItem} onClick={handleRecommenderData}>
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
