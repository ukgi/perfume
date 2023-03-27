import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Mood.module.css";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import ProgressiveImage from "react-progressive-graceful-image";

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
      <ProgressiveImage src={img}>
        {(src, loading) => {
          return (
            <img
              className={loading ? styles.cardImgLoading : styles.cardImg}
              src={src}
              alt='mood'
            />
          );
        }}
      </ProgressiveImage>

      <div className={styles.moodText}>
        <p className={styles.moodDesc}>{desc}</p>
      </div>
    </div>
  );
}
