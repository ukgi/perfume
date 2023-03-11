import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import styles from "./Start.module.css";

export default function Start() {
  const { kakaoNickname, id } = useParams();
  const navigate = useNavigate();
  console.log(kakaoNickname);

  return (
    <div className={styles.body}>
      <h2>{kakaoNickname}의 향수 추천을 시작합니다</h2>
      <button
        onClick={() => {
          navigate("/userName", { state: { kakaoNickname, id } });
        }}
      >
        시작하기
      </button>
    </div>
  );
}
