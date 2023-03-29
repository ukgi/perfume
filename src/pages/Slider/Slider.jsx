import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";
import { motion } from "framer-motion";
import { brandPerfume } from "../../Animation/Variants";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade]);

export default function Slider() {
  const navigate = useNavigate();

  return (
    <Swiper
      className={styles.slider}
      effect={"fade"}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
    >
      <SwiperSlide className={styles.imgBx}>
        <video
          src='/assets/videos/videos04.mp4'
          autoPlay
          loop
          muted
          typeof='mp4'
        ></video>
        <div className={styles.content}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            인:향
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            당신의 향기를 찾아드립니다.
          </motion.p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.imgBx}>
        <video
          src='/assets/videos/videos07.mp4'
          autoPlay
          loop
          muted
          typeof='mp4'
        ></video>
        <div className={styles.content} id={styles.contentTwo}>
          <h2>취향</h2>
          <p>
            인류 최초의 화장품이 향수인 것을 알고 있나요?
            <br />
            당신이 향수를 찾는 이유는 본능입니다.
            <br /> 당신의 취향에 꼭 맞는 향수를 우리가 추천해드릴게요.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.imgBx}>
        <img src='/assets/images/10.jpeg' alt='' />
        <div className={styles.content} id={styles.contentThree}>
          <h2>지향</h2>
          <p>
            특정 향을 맡았을때 누군가가 떠오른 적 있으신가요?
            <br /> 향은 당신의 이미지를 나타냅니다. <br /> 저희 서비스는 당신의
            이미지와 가장 잘 어울리는 향을 추천해드려요.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.imgBx}>
        <img src='/assets/images/9.jpg' alt='' id={styles.lastSlide} />
        <motion.img
          initial='hidden'
          animate='visible'
          variants={brandPerfume}
          src='/assets/images/향수병4.png'
          alt=''
          id={styles.perfumeBottle}
        />
        <div className={styles.content} id={styles.lastSlideContent}>
          <p className={styles.h3}>인:향에서 당신의 향기를 찾아드릴게요</p>
          <button
            className={styles.button}
            onClick={() => navigate("/services")}
          >
            <span>시작하기</span>
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
