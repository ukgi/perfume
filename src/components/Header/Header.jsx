import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillBellFill } from "react-icons/bs";

export default function Header() {
  const navigate = useNavigate();

  //⬇️ 수정 필요 !!
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <a href='/'>
        <img
          className={styles.logo}
          src='/assets/images/Logo/Logo2.png'
          alt=''
        />
      </a>
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
