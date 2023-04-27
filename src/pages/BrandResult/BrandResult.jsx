import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./BrandResult.module.css";
import Card from "./Card";
import ReactElasticCarousel from "react-elastic-carousel";
import BackBtn from "../../components/BackBtn/BackBtn";

export default function BrandResult() {
  const { state } = useLocation();
  const { brandName } = useParams();

  return (
    <div className={styles.body}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>
          {brandName}의 다른 제품들을 소개해드릴게요
        </h1>
        <h4>이미지를 클릭하여 상세 정보를 확인하세요</h4>
      </div>
      <ReactElasticCarousel breakPoints={breakPoints}>
        {state &&
          state.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </ReactElasticCarousel>
      <BackBtn />
    </div>
  );
}

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
