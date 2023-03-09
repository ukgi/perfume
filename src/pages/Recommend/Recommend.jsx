import React from "react";
import styles from "./Recommend.module.css";

export default function Recommend() {
  const { nickname } = sessionStorage.getItem("kakaoNickname");
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.userImage} src='/assets/images/2.jpg' alt='' />
        <h2>{nickname}</h2>
        <h3>향수 설문 데이터</h3>
      </div>
      <div className={styles.testContainer}>
        <h3 className={styles.testContainerTitle}>실시간 테스트 현황</h3>
        <div className={styles.testResultBox}>
          <p className={styles.testTakers}>3명</p>
          <p className={styles.testTakersDesc}>응시자 수</p>
        </div>
      </div>
      <button className={styles.button}>자세히 알아보기</button>
    </div>
  );
}
