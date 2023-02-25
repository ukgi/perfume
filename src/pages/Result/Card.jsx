import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

export default function Card({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.swiperSlide}
      onClick={() => navigate(`/result/${data.perfume.id}`)}
    >
      <h2 className={styles.swiperSlidetitle}>{data.perfume.perfumeName}</h2>
      <img
        className={styles.swiperSlideImg}
        src={data.perfume.perfumeImageUrl}
        alt=''
      />
    </div>
  );
}
