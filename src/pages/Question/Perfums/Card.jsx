import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Perfums.module.css";

export default function Card({ info }) {
  const { title, desc, img, backgroundColor } = info;
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();
  const { state } = useLocation();

  const handlePerfums = () => {
    setUser((prev) => ({
      ...prev,
      scentAnswer: title,
    }));
    navigate("/mood", { state: { title } });
  };

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, scentAnswer: title }));
    navigate("/mood", { state: { state, title } });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        isRecommend ? handleRecommend() : handlePerfums();
      }}
    >
      <img className={styles.cardImg} src={img} alt='' />
      <div
        className={styles.cardIntro}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
}
