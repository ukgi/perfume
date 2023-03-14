import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import styles from "./Mood.module.css";
import { motion } from "framer-motion";
import { handleMood } from "./HandleMood";
import { container, item } from "../../../Animation/Variants";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";

export default function Mood() {
  const { state } = useLocation();
  const { title } = state;
  const [mood, setMood] = useState([]);
  const { isRecommend } = useKakaoLoginUserContext();

  useEffect(() => {
    handleMood(title, setMood);
  }, [title]);

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {isRecommend ? (
        <motion.h2 className={styles.title} variants={container}>
          {state.state}에게 어울리는 분위기를 골라주세요
        </motion.h2>
      ) : (
        <motion.h2 className={styles.title} variants={container}>
          {title}와 어울리는 분위기를 골라주세요
        </motion.h2>
      )}
      {mood.map((moodInfo, index) => {
        return (
          <motion.div className={styles.cardBox} key={index} variants={item}>
            <Card info={moodInfo} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
