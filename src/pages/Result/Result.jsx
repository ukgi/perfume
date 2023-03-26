import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Result.module.css";

// ⬇️ Import Swiper styles
import SwiperCore, { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "./Card";
import { useUserContext } from "../../context/UserContextApi";
SwiperCore.use([Navigation, Pagination, FreeMode]);

export default function Result() {
  const { state } = useLocation();
  const { userName } = useUserContext();
  console.log("state", state);
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{userName} 님을 위한 향수입니다</h2>
      <Swiper
        navigation
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        style={{
          height: "100vh",
          border: "2px solid black",
          marginTop: "100px",
          overflow: "hidden",
        }}
      >
        {state.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Card data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
