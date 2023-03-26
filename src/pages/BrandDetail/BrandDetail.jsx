import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BrandDetail.module.css";

// 🔽 import swiper styles
import SwiperCore, { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import OtherBrandCard from "./OtherBrandCard";

SwiperCore.use([Navigation, Pagination, FreeMode]);

export default function BrandDetail() {
  const { state } = useLocation();

  const { id, brandName, perfumeName, perfumeImageUrl, perfumeFeature } = state;

  const { isLoading, data: relatedPerfume } = useQuery(
    ["relatedPerfume", id],
    async () => {
      try {
        const data = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/survey/show-similar-perfume/${id}`
        );
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

  console.log("유사 향수 데이터", relatedPerfume);

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
          <h3 className={styles.sectionTwoTitle}>유사 향수를 만나보세요</h3>
          <span className={styles.sectionTwoDesc}>
            해당 향수와 유사한 같은 브랜드 및 타 브랜드 제품을 만나보실 수
            있어요
          </span>
        </div>
        {isLoading ? (
          <span>로딩중 ...</span>
        ) : (
          <Swiper
            navigation
            slidesPerView={5}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides
          >
            {relatedPerfume &&
              relatedPerfume.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <OtherBrandCard data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
