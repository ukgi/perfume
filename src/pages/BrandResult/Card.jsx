import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandResult.module.css";

export default function Card({ item }) {
  const navigate = useNavigate();
  const readDetail = () => {
    navigate(`/result/${item.id}`);
  };

  return (
    <div onClick={readDetail}>
      <img className={styles.perfumeImg} src={item.perfumeImageUrl} alt='' />
    </div>
  );
}
