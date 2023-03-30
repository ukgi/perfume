import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";
import styles from "./Login.module.css";
import { motion } from "framer-motion";
import { blogList } from "./blog-list";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function Login() {
  return (
    <div className={styles.body}>
      <BsArrowDownCircleFill
        className={styles.moveToDownBtn}
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      ></BsArrowDownCircleFill>
      {blogList.map((item, index) => {
        if (index === 0) {
          return (
            <div className={styles.container} key={index}>
              <Card image={item.image} h1='향수 추천 서비스' p={item.p} />
            </div>
          );
        } else {
          return (
            <div className={styles.container} key={index}>
              <Card image={item.image} h2={item.h2} p={item.p} />
            </div>
          );
        }
      })}
      <div className={styles.loginContainer}>
        <h2 className={styles.title}>
          해당 서비스를 이용하기 위해선 간단한 로그인이 필요합니다
        </h2>
        <a href={KAKAO_AUTH_URL}>
          <img
            src='/assets/images/kakaoLogo/kakaoLoginBtn.png'
            alt='kakaoLogo'
          />
        </a>
      </div>
    </div>
  );
}

function Card({ image, h1, h2, p, id }) {
  return (
    <motion.div
      className={styles.card}
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.img
        src={image}
        alt=''
        variants={imageAnimate}
        height={200}
      ></motion.img>
      {h1 && <motion.h1 variants={textAnimate}>{h1}</motion.h1>}
      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
    </motion.div>
  );
}

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
