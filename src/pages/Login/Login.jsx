import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <a href={KAKAO_AUTH_URL}>카카오 로그인</a>
    </div>
  );
}
