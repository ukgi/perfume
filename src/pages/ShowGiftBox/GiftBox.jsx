import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShowGiftBox.module.css";
import { motion } from "framer-motion";

export default function GiftBox({ data }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.gift}
      onClick={() => navigate("/result", { state: data })}
      onTouchStart={() => navigate("/result", { state: data })}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
    >
      <div className={styles.giftBow}>
        <div className={styles.giftBowLeft}></div>
        <div className={styles.giftBowRight}></div>
        <div className={styles.giftBowCenter}></div>
      </div>
      <div className={styles.giftBox}>
        <div className={styles.giftLidShadow}></div>
      </div>
      <div className={styles.giftLid}></div>
      <div className={styles.giftStar} id={styles.giftStar01}></div>
      <div className={styles.giftStar} id={styles.giftStar02}></div>
      <div className={styles.giftStar} id={styles.giftStar03}></div>
      <div className={styles.giftStar} id={styles.giftStar04}></div>
      <div className={styles.giftStar} id={styles.giftStar05}></div>
    </motion.div>
  );
}
