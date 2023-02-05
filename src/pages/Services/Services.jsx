import React from "react";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
// ⬇️ Import Swiper styles
// import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import "swiper/scss/effect-coverflow";
// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Services() {
  const servicesInfo = [
    {
      title: "맞춤 향수 추천",
      dec: "여러 질문을 통해 당신이 원하는 향과 그 향에 맞는 향수를 추천해줍니다",
      background: "#2196f3",
    },
    {
      title: "유사 향수 추천",
      dec: "기존에 사용하던 향수와 유사한, 또 다른 향수 브랜드 제품을 추천해줍니다",
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
      animate={{
        width: "100%",
        transition: { duration: 1.2 },
      }}
      exit={{ x: window.innerWidth, transition: { duration: 0 } }}
    >
      {servicesInfo.map((info, index) => (
        <Card key={index} info={info} />
      ))}
    </motion.div>
  );
}
