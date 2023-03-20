import axios from "axios";
import React from "react";
import styles from "./BrandResult.module.css";

export default function Card({ item }) {
  const readDetail = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_SERVER_DOMAIN}/survey/show-similar-perfume/${item.id}`
    );
    console.log(data);
  };

  return (
    <div onClick={readDetail}>
      <img className={styles.perfumeImg} src={item.perfumeImageUrl} alt='' />
    </div>
  );
}
