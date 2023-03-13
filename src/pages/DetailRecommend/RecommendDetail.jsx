import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./RecommendDetail.module.css";
import { useState } from "react";
import { useEffect } from "react";
import ItemRecommender from "./ItemRecommender";

export default function RecommendDetail() {
  const { state } = useLocation();
  console.log(state);
  const [recommenders, setRecommenders] = useState([]);

  useEffect(() => {
    setRecommenders(state);
  }, [state]);

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>
        {sessionStorage.getItem("kakaoNickname")}님의 향기를 추천해준
        사람들입니다 ⬇️
      </h2>
      <ul className={styles.recommenderList}>
        {recommenders &&
          recommenders.map((recommender, index) => {
            return (
              <ItemRecommender
                key={recommender.id}
                recommender={recommender}
                index={index}
              />
            );
          })}
      </ul>
    </div>
  );
}
