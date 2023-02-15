import React from "react";
import Card from "./Card";
import styles from "./Styles.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";

export default function Styles() {
  const stylesCategory = [
    { title: "캐주얼", img: "/assets/images/styles/캐주얼.png" },
    { title: "포멀", img: "/assets/images/styles/포멀.png" },
  ];
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
              <Card style={style} />;
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
