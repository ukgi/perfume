import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import styles from "./Gender.module.css";

export default function Card({ gender, state }) {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();

  const handleGender = () => {
    setUser((prev) => ({ ...prev, genderAnswer: gender }));
    navigate("/perfums");
  };

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, genderAnswer: gender }));
    navigate("/perfums", { state });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        isRecommend ? handleRecommend() : handleGender();
      }}
      style={
        gender === "남자"
          ? {
              background: `url('/assets/images/man.jpg') center / cover no-repeat`,
            }
          : {
              background: `url('/assets/images/woman.jpg')  center / cover no-repeat`,
            }
      }
    >
      <div className={styles.circle}>
        <h3>{gender === "남자" ? "Man" : "Woman"}</h3>
      </div>
    </div>
  );
}
