import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Gender.module.css";
import { motion } from "framer-motion";
import Card from "./Card";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Gender() {
  const { userName } = useParams();
  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h2 className={styles.title} variants={item}>
        {userName} 님의 성별을 고르세요
      </motion.h2>
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
