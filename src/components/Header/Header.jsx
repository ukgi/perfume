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
    navigate("/");
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
          <h3>{sessionStorage.getItem("kakaoNickname")}님 환영합니다</h3>
          <BsFillBellFill className={styles.bell} />
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <span></span>
      )}
    </header>
  );
}
