import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Comment.module.css";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import { useState } from "react";

export default function Comment() {
  const { state } = useLocation();
  const { setRecommend } = useKakaoLoginUserContext();

  const [comment, setComment] = useState("");

  const handleInput = (e) => setComment(e.target.value);

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, comment }));
  };

  return (
    <div className={styles.body}>
      <h2>{state}에게 추천 이유와 간단한 코멘트를 남겨보세요</h2>
      <div>
        <input type='textarea' onChange={handleInput} value={comment} />
        <button
          onClick={() => {
            handleRecommend();
          }}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
