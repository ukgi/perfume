import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Mood.module.css";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";

export default function Card({ info }) {
  const { mood, img, desc } = info;
  const navigate = useNavigate();
  const { state } = useLocation();

  const { setUser } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();

  const handleMood = () => {
    setUser((prev) => ({
      ...prev,
      moodAnswer: mood,
    }));
    navigate("/season");
  };

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, moodAnswer: mood }));
    navigate("/season", { state: state.state });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        isRecommend ? handleRecommend() : handleMood();
      }}
    >
      <img className={styles.cardImg} src={img} alt='' />
      <div className={styles.moodText}>
        <p className={styles.moodDesc}>{desc}</p>
      </div>
    </div>
  );
}
