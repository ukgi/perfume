import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./BestRecommend.module.css";

export default function BestRecommend() {
  const [bestRecommend, setBestRecommend] = useState({});

  useEffect(() => {
    const handleBestRecommend = async () => {
      const data = await axios.get("data/BestRecommend.json");
      setBestRecommend(data.data);
      return data.data;
    };
    handleBestRecommend();
  }, []);

  return (
    <>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 무드 추천</h2>
        <div className={styles.testResultBox}>
          <h3 className={styles.testTakers}>
            {bestRecommend ? Object.values(bestRecommend)[0] : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {bestRecommend
              ? Object.keys(bestRecommend)[0]
              : "추천된 무드가 없습니다"}
          </h3>
        </div>
      </div>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 향수 추천</h2>
        <div className={styles.testResultBox}>
          <h3 className={styles.testTakers}>
            {bestRecommend ? Object.values(bestRecommend)[1] : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {bestRecommend
              ? Object.keys(bestRecommend)[1]
              : "추천된 향수가 없습니다"}
          </h3>
        </div>
      </div>
    </>
  );
}
