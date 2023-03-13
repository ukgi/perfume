import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Comment.module.css";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import { useState } from "react";
import axios from "axios";

export default function Comment() {
  const { state } = useLocation();
  const { recommend, setRecommend } = useKakaoLoginUserContext();
  const navigate = useNavigate();

  const [comment, setComment] = useState("");

  const handleInput = (e) => setComment(e.target.value);

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, comment }));
  };

  const postRecommendData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", recommend) //
      .then((res) => {
        console.log(res);
        navigate("/success");
      })
      .catch(console.error);
  };

  return (
    <div className={styles.body}>
      <h2>{state}에게 추천 이유를 적어주세요</h2>
      <div>
        <input type='textarea' onChange={handleInput} value={comment} />
        <button
          onClick={() => {
            handleRecommend();
            postRecommendData();
          }}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
