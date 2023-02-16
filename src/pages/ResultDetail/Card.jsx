import React from "react";
import styles from "./ResultDetail.module.css";
export default function Card({ data }) {
  return (
    <div className={styles.swiperSlide}>
      <h2 className={styles.swiperSlidetitle}>{data.perfume.perfumeName}</h2>
      <img
        className={styles.swiperSlideImg}
        src={data.perfume.perfumeImageUrl}
        alt=''
      />
    </div>
  );
}
