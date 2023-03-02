import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>
        해당 서비스를 이용하기 위해선 간단한 로그인이 필요합니다
      </h2>
      <a href={KAKAO_AUTH_URL}>
        <img src='/assets/images/kakaoLogo/kakaoLoginBtn.png' alt='kakaoLogo' />
      </a>
    </div>
  );
}
