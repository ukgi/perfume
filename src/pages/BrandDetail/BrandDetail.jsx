import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BrandDetail.module.css";

export default function BrandDetail() {
  const { state } = useLocation();

  const { id, brandName, perfumeName, perfumeImageUrl, perfumeFeature } = state;

  const {
    isLoading,
    error,
    data: relatedPerfume,
  } = useQuery(
    ["relatedPerfume"],
    async () => {
      try {
        const data = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/survey/show-similar-perfume/${id}`
        );
        return data.data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      staleTime: 3 * 100000 * 10000,
    }
  );

  console.log(relatedPerfume);

  return (
    <div className={styles.body}>
      <div className={styles.sectionOne}>
        <div className={styles.bubbles}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.sectionOneText}>
          <h1>{perfumeName}</h1>
          <h2>{brandName}</h2>
          <p>{perfumeFeature}</p>
        </div>
        <img className={styles.sectionOneImg} src={perfumeImageUrl} alt='' />
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwoText}>
          <h3 className={styles.sectionTwoTitle}>유사 타 브랜드 향수</h3>
        </div>
      </div>
    </div>
  );
}
