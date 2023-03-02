import React from "react";

import styles from "./Season.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { container, item } from "../../../Animation/Variants";

export default function Season() {
  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h2 className={styles.title} variants={item}>
        향수를 사용하실 계절을 골라주세요
      </motion.h2>
      <div className={styles.cardSection}>
        {seasons.map((season, index) => (
          <motion.div key={index} variants={item}>
            <Card season={season} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const seasons = [
  {
    seasonTitle: "봄",
    color: "#ed9af0",
    img: "/assets/images/seasons/봄2.jpg",
  },
  {
    seasonTitle: "여름",
    color: "#64f588",
    img: "/assets/images/seasons/여름.jpg",
  },
  {
    seasonTitle: "가을",
    color: "#ff651e",
    img: "/assets/images/seasons/가을.jpg",
  },
  {
    seasonTitle: "겨울",
    color: "#64f0f5",
    img: "/assets/images/seasons/겨울.jpg",
  },
];
