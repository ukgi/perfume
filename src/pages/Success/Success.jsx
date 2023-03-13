import React from "react";
import styles from "./Success.module.css";

export default function Success() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>성공적으로 응답이 완료되었습니다</h2>
    </div>
  );
}
