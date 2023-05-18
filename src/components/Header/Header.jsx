import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillBellFill } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import Recommenders from "../Recommenders/Recommenders";
import { KAKAO_AUTH_URL } from "../../pages/Login/OAuth";
import { handleLogout } from "../../pages/Login/OAuth2RedirectHandeler";

export default function Header() {
  const navigate = useNavigate();

  const { isRecommend } = useKakaoLoginUserContext();

  const handleRecommendPage = () => {
    navigate("recommend");
  };

  const handleWishPage = () => {
    navigate("wishList");
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
          <Recommenders />
          <BsFillBellFill
            onClick={handleRecommendPage}
            className={styles.bell}
          />
          <BsBookmarkHeart className={styles.bell} onClick={handleWishPage} />
          <button onClick={handleLogout} className={styles.logoutBtn}>
            로그아웃
          </button>
        </div>
      ) : sessionStorage.getItem("isRecommend") === true ? (
        <></>
      ) : (
        <div className={styles.loginSection}>
          <BsBookmarkHeart className={styles.bell} onClick={handleWishPage} />
          <a href={KAKAO_AUTH_URL} className={styles.loginBtn}>
            로그인
          </a>
        </div>
      )}
    </header>
  );
}
