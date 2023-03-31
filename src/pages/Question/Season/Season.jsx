import React from "react";

import styles from "./Season.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { container, item } from "../../../Animation/Variants";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import { useLocation } from "react-router-dom";

export default function Season() {
  const { isRecommend } = useKakaoLoginUserContext();
  const { state } = useLocation();

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {isRecommend ? (
        <motion.h2 className={styles.title} variants={item}>
          {state}님의 생일은 언제인가요?
        </motion.h2>
      ) : (
        <motion.h2 className={styles.title} variants={item}>
          향수를 사용하실 계절을 골라주세요
        </motion.h2>
      )}
      {seasons.map((season, index) => (
        <motion.div key={index} variants={item}>
          <Card season={season} />
        </motion.div>
      ))}
    </motion.div>
  );
}

const seasons = [
  {
    seasonTitle: "봄",
    color: "#ed9af0",
    img: "/assets/images/seasons/봄.webp",
    seasonDesc: "벚꽃이 피는 따스한 봄",
  },
  {
    seasonTitle: "여름",
    color: "#64f588",
    img: "/assets/images/seasons/여름.webp",
    seasonDesc: "시원한 바다가 생각나는 여름",
  },
  {
    seasonTitle: "가을",
    color: "#ff651e",
    img: "/assets/images/seasons/가을.webp",
    seasonDesc: "낙엽이 떨어지는 가을",
  },
  {
    seasonTitle: "겨울",
    color: "#64f0f5",
    img: "/assets/images/seasons/겨울.webp",
    seasonDesc: "함박눈이 떨어지는 겨울",
  },
];
