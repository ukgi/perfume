import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Comment.module.css";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import { useState } from "react";
import axios from "axios";
import { config } from "../../config";

export default function Comment() {
  const { state } = useLocation();
  const { recommend, setRecommend } = useKakaoLoginUserContext();
  const navigate = useNavigate();

  const [comment, setComment] = useState(
    () => JSON.parse(sessionStorage.getItem("recommendData")).comment || ""
  );

  const [isClick, setIsClick] = useState(false);

  const handleInput = (e) => {
    setComment(e.target.value);
    setRecommend((prev) => ({ ...prev, comment }));
  };

  const handleRecommend = async () => {
    axios
      .post(
        `${config.api}/member/recommend/${
          JSON.parse(sessionStorage.getItem("recommendData")).id
        }`,
        recommend
      ) //
      .then((res) => {
        console.log(res);
        setIsClick(true);
        navigate("/success");
      })
      .catch(console.error);
  };

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{state}에게 추천 이유를 적어주세요</h2>
      <div className={styles.commentSection}>
        <textarea
          className={styles.textarea}
          type='textarea'
          onChange={handleInput}
          value={comment}
        />
        <button
          className={styles.btn}
          onClick={() => {
            handleRecommend();
          }}
          style={isClick && { display: "none" }}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
