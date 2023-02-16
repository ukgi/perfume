import React from "react";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>서버로부터 데이터를 가져올 수 없습니다</h2>
      <img
        className={styles.cryIcon}
        src='/assets/images/우는 아이콘.png'
        alt=''
      />
    </div>
  );
}
