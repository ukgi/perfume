import axios from "axios";
import React from "react";
import { config } from "../../config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ResultDetail.module.css";

export default function ResultDetail() {
  const { perfumeId } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getPerfumeDetailData = async () => {
      await axios
        .get(`${config.api}/perfume/show-perfume/${perfumeId}`)
        .then((data) => {
          return setData(data.data);
        })
        .catch(console.error);
    };
    getPerfumeDetailData();
  }, [perfumeId]);

  return (
    <>
      {data && (
        <div className={styles.body}>
          <div className={styles.sectionOne}>
            <div className={styles.sectionOneText}>
              <h1 className={styles.perfumeName}>{data.perfume.perfumeName}</h1>
              <h2 className={styles.perfumeBrand}>{data.perfume.brandName}</h2>
              <p className={styles.perfumeFeature}>
                {data.perfume.perfumeFeature}
              </p>
            </div>
            <img
              className={styles.sectionOneImg}
              src={data.perfume.perfumeImageUrl}
              alt=''
            />
          </div>
          <div className={styles.sectionTwo}>
            <div className={styles.sectionTwoText}>
              <h3 className={styles.sectionTwoTitle}>분위기 연출</h3>
              <span className={styles.sectionTwoDesc}>
                {data.moodRecommend}
              </span>
            </div>
            <img
              className={styles.sectionTwoImg}
              src={`/assets/images/resultDetail/${
                JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
              }_${
                JSON.parse(sessionStorage.getItem("userAnswer")).moodAnswer
              }.png`}
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
                <p>{data.scentRecommend}</p>
              </span>
            </div>
          </div>
          <div className={styles.sectionFour}>
            <div className={styles.sectionFourText}>
              <h3 className={styles.sectionFourTitle}>
                어떤 계절에 사용하면 좋을까요?
              </h3>
              <span className={styles.sectionFourDesc}>
                <p>{data.seasonRecommend}</p>
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
                  onTouchStart={() => navigate("/services")}
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
