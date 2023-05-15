import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { config as server } from "../../config";

import styles from "./BestRecommend.module.css";

export default function BestRecommend() {
  const id = sessionStorage.getItem("id");
  const [bestRecommend, setBestRecommend] = useState({});
  const [bestPerfume, setBestPerfume] = useState();
  const navigate = useNavigate();

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

        const bestPerfumeImage = await axios({
          method: "get",
          url: `${server.api}/perfume/perfume-image`,
          headers: { Authorization: `${accessToken}` },
          params: {
            perfumeName: `${Object.keys(data.data)[0]}`,
          },
        });
        setBestPerfume(bestPerfumeImage.data);
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

  const handleDetailPerfume = () =>
    navigate(`/brandDetail/${bestPerfume.id}`, { state: bestPerfume });

  return (
    <>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 향수 추천</h2>
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
          {bestPerfume && (
            <div>
              <img
                className={styles.bestPerfume}
                src={bestPerfume.perfumeImageUrl}
                alt=''
                onClick={handleDetailPerfume}
              />
              <p className={styles.bestPerfumeSubDesc}>
                클릭하여 세부 정보를 확인하세요
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 향기 추천</h2>
        <div className={styles.testResultBox}>
          <h3 className={styles.testTakers}>
            {bestRecommend ? Object.values(bestRecommend)[1] : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {Object.keys(bestRecommend)[1]
              ? Object.keys(bestRecommend)[1]
              : "추천된 향수가 없습니다"}
          </h3>
          {Object.keys(bestRecommend)[1] ? (
            <img
              className={styles.bestPerfume}
              src={`/assets/images/perfumeImg/${
                Object.keys(bestRecommend)[1]
              }.webp`}
              alt=''
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
