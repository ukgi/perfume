import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./RecommendDetail.module.css";
import { useState } from "react";
import { useEffect } from "react";
import ItemRecommender from "./ItemRecommender";

export default function RecommendDetail() {
  const { state } = useLocation();
  const [recommenders, setRecommenders] = useState([]);

  useEffect(() => {
    setRecommenders(state);
  }, [state]);

  console.log(recommenders);
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>
        {sessionStorage.getItem("kakaoNickname")}님의 향기를 추천해준
        사람들입니다
      </h2>
      <ul className={styles.recommenderList}>
        {recommenders.length !== 0 ? (
          recommenders.map((recommender, index) => {
            return (
              <ItemRecommender
                key={recommender.id}
                recommender={recommender}
                index={index}
              />
            );
          })
        ) : (
          <div className={styles.noRecommenderContainer}>
            <h3 className={styles.noRecommenderTitle}>
              아직 추천해준 사람이 없어요
            </h3>
            <div className={styles.noRecommenderImage}>
              <img src='/assets/images/heartbroken.svg' alt='' />
            </div>
          </div>
        )}
      </ul>
      <button className={styles.backBtn} onClick={() => window.history.back()}>
        뒤로가기
      </button>
    </div>
  );
}
