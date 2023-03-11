import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Season.module.css";
import { useUserContext } from "../../../context/UserContextApi";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";

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
    >
      <div className={styles.shape}>
        <img className={styles.img} src={img} alt='' />
        <div className={styles.content}>
          <div>
            <h2>{seasonTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
