import React from "react";
import Card from "./Card";
import styles from "./Styles.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";
import { useEffect } from "react";
import { useState } from "react";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import { useLocation } from "react-router-dom";

export default function Styles() {
  const { isRecommend } = useKakaoLoginUserContext();
  const { state } = useLocation();
  const [gender, setGender] = useState(
    isRecommend
      ? () => JSON.parse(sessionStorage.getItem("recommendData")).genderAnswer
      : () => JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
  );
  const stylesCategory = [
    {
      title: "캐쥬얼",
      img:
        gender === "남자"
          ? "/assets/images/styles/남자캐쥬얼.png"
          : "/assets/images/styles/여자캐쥬얼.png",
    },
    {
      title: "포멀",
      img:
        gender === "남자"
          ? "/assets/images/styles/남자포멀.png"
          : "/assets/images/styles/여자포멀.png",
    },
    {
      title: "미니멀",
      img:
        gender === "남자"
          ? "/assets/images/styles/남자미니멀.png"
          : "/assets/images/styles/여자미니멀.png",
    },
    {
      title: "스트릿",
      img:
        gender === "남자"
          ? "/assets/images/styles/남자스트릿.png"
          : "/assets/images/styles/여자스트릿.png",
    },
  ];

  useEffect(() => {
    setGender(
      isRecommend
        ? () => JSON.parse(sessionStorage.getItem("recommendData")).genderAnswer
        : () => JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
    );
  }, [gender, isRecommend]);

  return (
    <motion.div
      className={styles.body}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {isRecommend ? (
        <motion.h1 className={styles.title} variants={item}>
          {state}에게 어울리거나 자주 애용하는 스타일을 골라주세요
        </motion.h1>
      ) : (
        <motion.h1 className={styles.title} variants={item}>
          향수와 함께하실 스타일을 골라주세요
        </motion.h1>
      )}
      <div className={styles.container}>
        {stylesCategory.map((style, index) => {
          return (
            <motion.div key={index} variants={item}>
              <Card style={style} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
