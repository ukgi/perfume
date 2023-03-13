import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Recommend.module.css";

export default function Recommend() {
  const id = sessionStorage.getItem("id");
  const nickName = sessionStorage.getItem("kakaoNickname");
  const copyLinkRef = useRef();
  const [recommendData, setRecommendData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRecommendData = () => {
      axios
        .get("data/recommendData.json") //
        .then((res) => {
          console.log(res);
          sessionStorage.setItem(
            "recommenders",
            res.data.recommendationList.length
          );
          setRecommendData(res.data.recommendationList);
        });
    };
    handleRecommendData();
  }, []);

  const copyTextUrl = () => {
    if (!document.queryCommandSupported("copy")) {
      alert("No Support");
      return;
    }
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand("copy");
    alert("링크를 복사했습니다.");
  };

  const handleRecommendDetail = () => {
    navigate("/recommendDetail", { state: recommendData });
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img
          className={styles.userImage}
          src={sessionStorage.getItem("thumbnailImage")}
          alt=''
        />
        <h2>{nickName}</h2>
        <h3>향수 설문 데이터</h3>
        <div>
          <input
            className={styles.input}
            type='text'
            ref={copyLinkRef}
            defaultValue={`http://localhost:3000/recommend/${nickName}/${id}`}
          />
          <button className={styles.linkBtn} onClick={copyTextUrl}>
            링크 복사
          </button>
        </div>
      </div>
      <div className={styles.testContainer}>
        <h3 className={styles.testContainerTitle}>실시간 테스트 현황</h3>
        <div className={styles.testResultBox}>
          <p className={styles.testTakers}>{recommendData.length}명</p>
          <p className={styles.testTakersDesc}>응시자 수</p>
        </div>
      </div>
      <button onClick={handleRecommendDetail} className={styles.button}>
        자세히 알아보기
      </button>
    </div>
  );
}
