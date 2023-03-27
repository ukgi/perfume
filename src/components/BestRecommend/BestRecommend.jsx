import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { config as server } from "../../config";

import styles from "./BestRecommend.module.css";

export default function BestRecommend() {
  const id = sessionStorage.getItem("id");
  const [bestRecommend, setBestRecommend] = useState({});

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `${accessToken}` },
    };
    const handleBestRecommend = async () => {
      try {
        const data = await axios.get(
          `${server.api}/member/show-result/${id}`,
          config
        );
        setBestRecommend(data.data);
        console.log("best recommend", data.data);
        return data.data;
      } catch (err) {
        console.log(err);
        if (err.response.status === 404) {
          console.log("추천 목록이 없습니다 ❌");
        }
      }
    };
    handleBestRecommend();
  }, [id]);
  console.log(bestRecommend);
  return (
    <>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 무드 추천</h2>
        <div className={styles.testResultBox}>
          <h3 className={styles.testTakers}>
            {bestRecommend ? Object.values(bestRecommend)[0] : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {Object.keys(bestRecommend)[0] ? (
              Object.keys(bestRecommend)[0]
            ) : (
              <p>추천 데이터가 없습니다</p>
            )}
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
            {Object.keys(bestRecommend)[1]
              ? Object.keys(bestRecommend)[1]
              : "추천된 향수가 없습니다"}
          </h3>
        </div>
      </div>
    </>
  );
}
