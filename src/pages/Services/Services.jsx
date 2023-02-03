import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import Card from "./Card";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Services() {
  const servicesInfo = [
    {
      title: "맞춤 향수 추천",
      dec: "나와 어울리는 향수를 추천해줍니다",
      background: "#2196f3",
    },
    {
      title: "유사 향수 추천",
      dec: "원래 사용하던 향수와 유사한 향수 제품을 추천해줍니다",
      background: "#e01e63",
    },
    {
      title: "성격 향수 추천",
      dec: "나의 성격에 어울리는 향수를 추천해줍니다",
      background: "#c3d41a",
    },
  ];
  return (
    <motion.div
      className={styles.container}
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.7 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0 } }}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect='coverflow'
        coverflowEffect={{
          rotate: 50,
          stretch: 300,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px" }}
      >
        {servicesInfo.map((info, index) => {
          return (
            <SwiperSlide key={index} className={styles.SwiperSlide}>
              <Card info={info} />;
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
