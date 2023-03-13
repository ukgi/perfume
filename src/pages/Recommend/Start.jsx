import React from "react";
import { useEffect } from "react";
import { blogList } from "./blog-list.js";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import styles from "./Start.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function Start() {
  const { kakaoNickname, id } = useParams();
  const { setRecommend, setIsRecommend } = useKakaoLoginUserContext();

  const navigate = useNavigate();

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, id }));
    navigate("/userName", { state: { kakaoNickname, id } });
  };

  useEffect(() => {
    setIsRecommend(true);
  }, [setIsRecommend]);

  return (
    <div className={styles.container}>
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
            <div className={styles.body} key={index}>
              <Card
                image={item.image}
                h1={`${kakaoNickname}님이 향수 추천링크를 보냈습니다`}
                h2={item.h2}
                p={item.p}
              />
            </div>
          );
        } else {
          return (
            <div className={styles.body} key={index}>
              <Card image={item.image} h2={item.h2} p={item.p} />
            </div>
          );
        }
      })}
      <div className={styles.btnBox}>
        <button
          className={styles.startBtn}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          맨 상단으로
        </button>
        <button className={styles.startBtn} onClick={handleRecommend}>
          시작하기
        </button>
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
