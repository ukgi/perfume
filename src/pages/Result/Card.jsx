import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

export default function Card({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.swiperSlide}
      onClick={() => navigate(`/result/${data.id}`)}
    >
      <h2 className={styles.swiperSlidetitle}>{data.perfumeName}</h2>
      <img
        className={styles.swiperSlideImg}
        src={data.perfumeImageUrl}
        alt=''
      />
    </div>
  );
}
