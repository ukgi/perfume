import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillBellFill } from "react-icons/bs";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";

export default function Header() {
  const navigate = useNavigate();
  const { isRecommend } = useKakaoLoginUserContext();

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("kakaoNickname");
    sessionStorage.removeItem("recommenders");
    sessionStorage.removeItem("thumbnailImage");
    navigate("/");
  };

  const handleRecommendPage = () => {
    navigate("recommend");
  };

  return (
    <header className={styles.header}>
      {isRecommend ? (
        <span></span>
      ) : (
        <a href='/'>
          <img
            className={styles.logo}
            src='/assets/images/Logo/Logo2.png'
            alt=''
          />
        </a>
      )}
      {sessionStorage.getItem("kakaoNickname") ? (
        <div className={styles.loginSection}>
          <img
            className={styles.loginProfileImage}
            src={sessionStorage.getItem("thumbnailImage")}
            alt=''
          />
          <span className={styles.recommenders}>
            {sessionStorage.getItem("recommenders")}
          </span>
          <BsFillBellFill
            onClick={handleRecommendPage}
            className={styles.bell}
          />
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <span></span>
      )}
    </header>
  );
}
