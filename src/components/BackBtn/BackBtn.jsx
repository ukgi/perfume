import React from "react";
import styles from "./BackBtn.module.css";

export default function BackBtn() {
  return (
    <button className={styles.backBtn} onClick={() => window.history.back()}>
      뒤로 가기
    </button>
  );
}
