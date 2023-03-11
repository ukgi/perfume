import React from "react";
import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import styles from "./Start.module.css";

export default function Start() {
  const { kakaoNickname, id } = useParams();
  const { setRecommend, setIsRecommend } = useKakaoLoginUserContext();

  const navigate = useNavigate();

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, id }));
    navigate("/userName", { state: { kakaoNickname, id } });
  };

  useEffect(() => {
    setIsRecommend(true);
  }, [setIsRecommend]);

  return (
    <div className={styles.body}>
      <h2>{kakaoNickname}의 향수 추천을 시작합니다</h2>
      <button onClick={handleRecommend}>시작하기</button>
    </div>
  );
}
