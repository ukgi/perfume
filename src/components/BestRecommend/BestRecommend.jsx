import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { config as server } from "../../config";

import styles from "./BestRecommend.module.css";

export default function BestRecommend() {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");
  const id = sessionStorage.getItem("id");

  const handleDetailPerfume = () =>
    navigate(`/brandDetail/${bestPerfume.id}`, { state: bestPerfume });

  const { data: bestRecommend } = useQuery(
    ["bestRecommend", id],
    async () => {
      try {
        const config = {
          headers: { Authorization: `${accessToken}` },
        };
        const data = await axios.get(
          `${server.api}/member/show-analyzed-data/${id}`,
          config
        );
        return data.data;
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 404) {
          console.log("추천 목록이 없습니다 ❌");
        }
      }
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  const { data: bestPerfume } = useQuery(
    ["bestPerfume", accessToken],
    async () => {
      try {
        const bestPerfumeImage = await axios({
          method: "get",
          url: `${server.api}/perfume/perfume-image`,
          headers: { Authorization: `${accessToken}` },
          params: {
            perfumeName:
              bestRecommend && bestRecommend.perfumeAnalyzeObject
                ? bestRecommend.perfumeAnalyzeObject.perfumeName
                : "",
          },
        });
        return bestPerfumeImage.data.perfumeImageUrl;
      } catch (err) {
        console.error(err);
      }
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  return (
    <>
      <div className={styles.testContainer}>
        <h2 className={styles.testContainerTitle}>Best 향수 추천</h2>
        <div className={styles.testResultBox}>
          <h3 className={styles.testTakers}>
            {bestRecommend ? bestRecommend.perfumeAnalyzeObject.count : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {bestRecommend ? (
              bestRecommend.perfumeAnalyzeObject.perfumeName
            ) : (
              <p>추천 향수가 없습니다</p>
            )}
          </h3>
          {bestPerfume && (
            <div>
              <img
                className={styles.bestPerfume}
                src={bestPerfume}
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
            {bestRecommend ? bestRecommend.scentAnalyzeObject.count : 0}
          </h3>
          <h3 className={styles.testTakersDesc}>
            {bestRecommend
              ? bestRecommend.scentAnalyzeObject.scent
              : "추천 향기가 없습니다"}
          </h3>
          {bestRecommend ? (
            <img
              className={styles.bestPerfume}
              src={`/assets/images/perfumeImg/${bestRecommend.scentAnalyzeObject.scent}.webp`}
              alt='scentImg'
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
