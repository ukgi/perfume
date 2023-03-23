import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OtherBrandCard.module.css";

export default function OtherBrandCard({ data }) {
  const { perfumeImageUrl, id } = data;
  const navigate = useNavigate();

  const handleBrandDetail = () =>
    navigate(`/brandDetail/${id}`, { state: data });

  return (
    <div onClick={handleBrandDetail}>
      <img
        className={styles.swiperSlideImg}
        src={perfumeImageUrl}
        alt='perfumeImage'
      />
    </div>
  );
}
