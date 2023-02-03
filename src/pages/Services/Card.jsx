import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Services.module.css";
export default function Card({ info }) {
  const navigate = useNavigate();
  const { userName } = useParams();
  const { title, dec, background } = info;
  return (
    <div className={styles.card}>
      <div className={styles.sliderText} style={{ background }}>
        <h3 className={styles.sliderTextTitle}>{title}</h3>
      </div>
      <div className={styles.content}>
        <p>{dec}</p>
        <button
          className={styles.btn}
          onClick={() => {
            if (title === "맞춤 향수 추천") {
              return navigate(`/${userName}/question01`);
            }
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
