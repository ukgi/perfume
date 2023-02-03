import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Question01.module.css";
import { motion } from "framer-motion";
import Card from "./Card";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.6,
      delayChildren: 1.2,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Question01() {
  const { userName } = useParams();

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <h2 className={styles.title}>{userName} 님의 성별을 고르세요</h2>
      <div className={styles.cardSection}>
        {["남성", "여성"].map((gender, index) => (
          <motion.div key={index} variants={item}>
            <Card gender={gender} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
