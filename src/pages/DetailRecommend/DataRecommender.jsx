import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DataRecommender.module.css";

export default function DataRecommender() {
  const { state } = useLocation();
  const { recommender, perfume, comment } = state;
  const navigate = useNavigate();

  const handlePerfumeDetail = () => {
    navigate(`/brandDetail/${perfume.id}`, { state: perfume });
  };

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{recommender}님이 추천하는 향수입니다</h2>
      <div className={styles.perfumeList} onClick={handlePerfumeDetail}>
        <img
          className={styles.logo}
          src='/assets/images/Logo/Logo.png'
          alt=''
        />
        <img
          className={styles.perfumeImage}
          src={perfume.perfumeImageUrl}
          alt='perfume'
        />
        <div className={styles.perfumeText}>
          <h3 className={styles.perfumeTitle}>{perfume.perfumeName}</h3>
          <p className={styles.perfumeFeature}>{perfume.perfumeFeature}</p>
          <p className={styles.perfumeSubDesc}>
            If I could put memories in a bottle like scent
          </p>
        </div>
      </div>
      <div className={styles.commentBox}>
        <div className={styles.balloon}>{comment}</div>
      </div>
      <button className={styles.backBtn} onClick={() => window.history.back()}>
        뒤로 가기
      </button>
    </div>
  );
}
