import React from "react";
import styles from "./Mood.module.css";
import { motion } from "framer-motion";
import { item } from "../../../Animation/Variants";

export default function Card({ info }) {
  const { img, desc } = info;
  return (
    <motion.div className={styles.card} variants={item}>
      <img className={styles.faceFront} id={styles.front} src={img} alt='' />
      <div className={styles.faceBack} id={styles.back}>
        <p className={styles.moodDesc}>{desc}</p>
      </div>
    </motion.div>
  );
}
