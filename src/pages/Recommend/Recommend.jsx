import React from "react";
import { useRef } from "react";
import styles from "./Recommend.module.css";

export default function Recommend() {
  const id = sessionStorage.getItem("id");
  const nickName = sessionStorage.getItem("kakaoNickname");
  const copyLinkRef = useRef();

  const copyTextUrl = () => {
    // Browser compatibility 알림
    if (!document.queryCommandSupported("copy")) {
      alert("No Support");
      return;
    }

    // 선택 후 복사
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand("copy");

    // 복사 완료 알림
    alert("링크를 복사했습니다.");
  };
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.userImage} src='/assets/images/2.jpg' alt='' />
        <h2>{nickName}</h2>
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
      <div>
        <input
          type='text'
          ref={copyLinkRef}
          defaultValue={`http://localhost:3000/recommend/${nickName}/${id}`}
        />
        <button onClick={copyTextUrl}>링크 복사</button>
      </div>
    </div>
  );
}