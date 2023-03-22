import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./BrandResult.module.css";
import Card from "./Card";

export default function BrandResult() {
  const { state } = useLocation();
  const { brandName } = useParams();

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        {brandName}의 다른 제품들을 소개해드릴게요
      </h1>
      <div className={styles.perfumeContainer}>
        {state &&
          state.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </div>
  );
}
