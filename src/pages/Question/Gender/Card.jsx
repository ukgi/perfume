import React from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import styles from "./Gender.module.css";

const manCircle = {
  backgroundColor: "#0077ff",
};
const womanCircle = {
  backgroundColor: "#f064f5",
};

export default function Card({ gender }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate("/perfums")}>
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
