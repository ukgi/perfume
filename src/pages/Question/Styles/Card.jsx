import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Styles.module.css";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";

export default function Card({ style }) {
  const { title, img } = style;
  const navigate = useNavigate();
  const { state } = useLocation();

  const { setUser } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();

  const handleStyle = () => {
    setUser((prev) => ({
      ...prev,
      styleAnswer: title,
    }));
    navigate("/showGiftBox");
  };

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, styleAnswer: title }));
    navigate("/comment", { state });
  };

  return (
    <div
      className={styles.box}
      onClick={() => {
        isRecommend ? handleRecommend() : handleStyle();
      }}
      onTouchStart={() => {
        isRecommend ? handleRecommend() : handleStyle();
      }}
    >
      <h3 className={styles.cardOneTitle}>{title}</h3>
      <img className={styles.img} src={img} alt='' />
    </div>
  );
}
