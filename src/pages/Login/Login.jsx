import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <a href={KAKAO_AUTH_URL}>
        <img src='/assets/images/kakaoLogo/kakaoLoginBtn.png' alt='kakaoLogo' />
      </a>
    </div>
  );
}
