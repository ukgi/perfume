import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandResult.module.css";

export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/brandDetail/${item.id}`, { state: item })}>
      <img className={styles.perfumeImg} src={item.perfumeImageUrl} alt='' />
    </div>
  );
}
