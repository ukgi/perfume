import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
export default function GiftBox({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.gift}
      onClick={() => navigate("/resultDetail", { state: data })}
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
    </div>
  );
}
