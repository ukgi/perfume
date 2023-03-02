import React from "react";
import Card from "./Card";
import styles from "./Styles.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";
import { useEffect } from "react";
import { useState } from "react";

export default function Styles() {
  const [gender, setGender] = useState(
    () => JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
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
  ];

  useEffect(() => {
    setGender(
      () => JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
    );
  }, [gender]);

  return (
    <motion.div
      className={styles.body}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 className={styles.title} variants={item}>
        향수와 함께하실 스타일을 골라주세요
      </motion.h1>
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
