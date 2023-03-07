import React from "react";
import { handleKakaoOauth } from "../Login/OAuth2RedirectHandeler";
import styles from "./Recommend.module.css";

export default function Recommend() {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleKakaoOauth}>
        버튼
      </button>
    </div>
  );
}
