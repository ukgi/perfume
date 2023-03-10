import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ResultDetail.module.css";

export default function ResultDetail() {
  const { perfumeId } = useParams();
  const [data, setData] = useState();
  // `${process.env.REACT_APP_SERVER_DOMAIN}/perfume/show-perfume/${perfumeId}`

  useEffect(() => {
    const getPerfumeDetailData = async () => {
      await axios
        .get("/data/perfumeDetail.json")
        .then((data) => {
          console.log(data.data);
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
              <h1>{data.perfume.perfumeName}</h1>
              <h2>{data.perfume.brandName}</h2>
              <p>{data.perfume.perfumeFeature}</p>
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
              src='/assets/images/Appreciation.svg'
              alt=''
            />
          </div>
          <div className={styles.sectionThree}>
            <img
              className={styles.sectionThreeImg}
              src='/assets/images/InLove.svg'
              alt=''
            />
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
            </div>
            <img
              className={styles.sectionFourImg}
              src='/assets/images/Fall.svg'
              alt=''
            />
          </div>
        </div>
      )}
    </>
  );
}
