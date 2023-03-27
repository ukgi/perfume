import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Season.module.css";
import { useUserContext } from "../../../context/UserContextApi";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import ProgressiveImage from "react-progressive-graceful-image";

export default function Card({ season }) {
  const { seasonTitle, img } = season;
  const navigate = useNavigate();

  const { setUser } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();
  const { state } = useLocation();

  const handleSeason = () => {
    setUser((prev) => ({
      ...prev,
      seasonAnswer: seasonTitle,
    }));
    navigate("/styles");
  };

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, seasonAnswer: seasonTitle }));
    navigate("/styles", { state });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        isRecommend ? handleRecommend() : handleSeason();
      }}
      onTouchStart={() => {
        isRecommend ? handleRecommend() : handleSeason();
      }}
    >
      <div className={styles.shape}>
        <ProgressiveImage src={img}>
          {(src, loading) => {
            return (
              <img
                className={loading ? styles.cardImgLoading : styles.img}
                src={src}
                alt='season'
              />
            );
          }}
        </ProgressiveImage>
        <div className={styles.content}>
          <div>
            <h2>{seasonTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
