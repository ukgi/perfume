import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Result.module.css";

// ⬇️ Import Swiper styles
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import Card from "./Card";
import { useUserContext } from "../../context/UserContextApi";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Result() {
  const { state } = useLocation();
  const { userName } = useUserContext();
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{userName} 님을 위한 향수입니다</h2>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect='coverflow'
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={4}
        centeredSlides
        style={{ height: "100vh" }}
      >
        {state.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Card data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
