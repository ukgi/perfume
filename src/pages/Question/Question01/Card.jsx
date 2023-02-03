import React from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import styles from "./Question01.module.css";

const manCircle = {
  backgroundColor: "#0077ff",
};
const womanCircle = {
  backgroundColor: "#f064f5",
};

export default function Card({ gender }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.circle}
        style={gender === "남성" ? manCircle : womanCircle}
      >
        <h3>{gender}</h3>
      </div>
      <div className={styles.content}>
        {gender === "남성" ? (
          <FcBusinessman className={styles.manIcon} />
        ) : (
          <FcBusinesswoman className={styles.womanIcon} />
        )}
      </div>
    </div>
  );
}
