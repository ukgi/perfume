import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BrandDetail.module.css";
import { config } from "../../config";
import OtherBrandCard from "./OtherBrandCard";
import ReactElasticCarousel from "react-elastic-carousel";
import BackBtn from "../../components/BackBtn/BackBtn";
import RootBtn from "../../components/RootBtn/RootBtn";

export default function BrandDetail() {
  const { state } = useLocation();

  const { id, brandName, perfumeName, perfumeImageUrl, perfumeFeature } = state;

  const { isLoading, data: relatedPerfume } = useQuery(
    ["relatedPerfume", id],
    async () => {
      try {
        const data = await axios.get(`/data/perfumeBrand.json`);
        return data.data.slice(0, 10);
      } catch (error) {
        console.error(error);
      }
    },
    {
      staleTime: 3 * 100000 * 10000,
      enabled: !!id,
    }
  );

  return (
    <div className={styles.body}>
      <div className={styles.sectionOne}>
        <div className={styles.sectionOneText}>
          <h1>{perfumeName}</h1>
          <h2>{brandName}</h2>
          <p>{perfumeFeature}</p>
        </div>
        <img className={styles.sectionOneImg} src={perfumeImageUrl} alt='' />
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwoText}>
          <h3 className={styles.sectionTwoTitle}>유사 향수를 만나보세요</h3>
          <span className={styles.sectionTwoDesc}>
            해당 향수와 유사한 같은 브랜드 및 타 브랜드 제품을 만나보실 수
            있어요
          </span>
        </div>
        {isLoading ? (
          <span>로딩중 ...</span>
        ) : (
          <ReactElasticCarousel breakPoints={breakPoints}>
            {relatedPerfume &&
              relatedPerfume.map((data, index) => {
                return <OtherBrandCard key={index} data={data} />;
              })}
          </ReactElasticCarousel>
        )}
        <div className={styles.btnBox}>
          <BackBtn />
          <RootBtn />
        </div>
      </div>
    </div>
  );
}

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
];
