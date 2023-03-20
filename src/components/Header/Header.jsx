import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillBellFill } from "react-icons/bs";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import Recommenders from "../Recommenders/Recommenders";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();

  const { isRecommend } = useKakaoLoginUserContext();

  const url = new URL(window.location.href).pathname;

  const handleLogout = async () => {
    axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/member/logout`, {
      data: {
        memberId: sessionStorage.getItem("memberId"),
        accessToken: sessionStorage.getItem("accessToken"),
      },
      withCredentials: true,
    });

    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("memberId");
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
          {url === "/result" ? (
            <img
              className={styles.logo}
              src='/assets/images/Logo/Logo.png'
              alt=''
              style={{ width: "120px" }}
            />
          ) : (
            <img
              className={styles.logo}
              src='/assets/images/Logo/Logo2.png'
              alt=''
            />
          )}
        </a>
      )}
      {sessionStorage.getItem("kakaoNickname") ? (
        <div className={styles.loginSection}>
          <img
            className={styles.loginProfileImage}
            src={sessionStorage.getItem("thumbnailImage")}
            alt=''
          />
          <Recommenders />
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
