import axios from "axios";
import React from "react";
import styles from "./BrandResult.module.css";
export default function Card({ item }) {
  const readDetail = async () => {
    try {
      const response = await axios.get(
        `http://13.125.178.194:8080/perfume/show-perfume/${item.id}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div onClick={readDetail}>
      <img className={styles.perfumeImg} src={item.perfumeImageUrl} alt='' />
    </div>
  );
}
