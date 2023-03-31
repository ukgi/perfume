import axios from "axios";
import React from "react";
import { config } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ResultDetail.module.css";
import { useQuery } from "@tanstack/react-query";

export default function ResultDetail() {
  const { perfumeId } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: perfumeDetailData,
  } = useQuery(
    ["perfumeDetail", perfumeId],
    async () => {
      try {
        const data = await axios.get(
          `${config.api}/perfume/show-perfume/${perfumeId}`
        );
        return data.data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  if (isLoading)
    return (
      <div className={styles.subBody}>
        <h3>로딩중 ...</h3>
      </div>
    );
  if (isError)
    return (
      <div className={styles.subBody}>
        <h3>Error 😡</h3>
      </div>
    );

  return (
    <>
      {perfumeDetailData && (
        <div className={styles.body}>
          <div className={styles.sectionOne}>
            <div className={styles.sectionOneText}>
              <h1 className={styles.perfumeName}>
                {perfumeDetailData.perfume.perfumeName}
              </h1>
              <h2 className={styles.perfumeBrand}>
                {perfumeDetailData.perfume.brandName}
              </h2>
              <p className={styles.perfumeFeature}>
                {perfumeDetailData.perfume.perfumeFeature}
              </p>
            </div>
            <img
              className={styles.sectionOneImg}
              src={perfumeDetailData.perfume.perfumeImageUrl}
              alt=''
            />
          </div>
          <div className={styles.sectionTwo}>
            <div className={styles.sectionTwoText}>
              <h3 className={styles.sectionTwoTitle}>분위기 연출</h3>
              <span className={styles.sectionTwoDesc}>
                {perfumeDetailData.moodRecommend}
              </span>
            </div>
            <img
              loading={"lazy"}
              decoding={"async"}
              className={styles.sectionTwoImg}
              src={`/assets/images/resultDetail/${
                JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
              }_${
                JSON.parse(sessionStorage.getItem("userAnswer")).moodAnswer
              }.webp`}
              alt=''
            />
          </div>
          <div className={styles.sectionThree}>
            <div className={styles.bubbles}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.sectionThreeText}>
              <h3 className={styles.sectionThreeTitle}>
                이런 효과를 줄 수 있어요
              </h3>
              <span className={styles.sectionThreeDesc}>
                <p>{perfumeDetailData.scentRecommend}</p>
              </span>
            </div>
          </div>
          <div className={styles.sectionFour}>
            <div className={styles.sectionFourText}>
              <h3 className={styles.sectionFourTitle}>
                어떤 계절에 사용하면 좋을까요?
              </h3>
              <span className={styles.sectionFourDesc}>
                <p>{perfumeDetailData.seasonRecommend}</p>
              </span>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.returnRootBtn}
                  onClick={() => window.history.back()}
                >
                  이전 페이지로 돌아가기
                </button>
                <button
                  className={styles.returnRootBtn}
                  onClick={() => navigate("/services")}
                >
                  처음으로 돌아가기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
