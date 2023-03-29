import React from "react";
import styles from "./Perfums.module.css";
import Card from "./Card";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";
import { useKakaoLoginUserContext } from "../../../context/KakaoLoginUserContextApi";
import { useLocation } from "react-router-dom";
export default function Fashion() {
  const { isRecommend } = useKakaoLoginUserContext();
  const { state } = useLocation();

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {isRecommend ? (
        <motion.h2 className={styles.title} variants={container}>
          {state}에게 어울리는 향기를 고르세요
        </motion.h2>
      ) : (
        <motion.h2 className={styles.title} variants={container}>
          원하시는 향기를 고르세요
        </motion.h2>
      )}
      <div className={styles.cardSection}>
        {perfums.map((card, index) => (
          <motion.div key={index} variants={item}>
            <Card info={card} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const perfums = [
  {
    title: "floral",
    desc: "꽃처럼 우아하게 퍼져나가는 향기",
    img: "/assets/images/perfumeImg/플로럴.jpg",
    backgroundColor: "#ff8e7f",
  },
  {
    title: "soapy",
    desc: "이제 막 씻고 나온 듯이 은은하게 퍼지는 향기",
    img: "/assets/images/perfumeImg/소피.jpg",
    backgroundColor: "#89a5ea",
    transform: "translateY(30px)",
  },
  {
    title: "woody",
    desc: " 따뜻하고 부드러우면서, 고급스러운 자연의 향기",
    img: "/assets/images/perfumeImg/우디.jpg",
    backgroundColor: "#800000",
  },
  {
    title: "citrus",
    desc: "가볍고 상큼하며, 과일처럼 톡 쏘는 향기",
    img: "/assets/images/perfumeImg/시트러스.jpg",
    backgroundColor: "#ff9900",
    transform: "translateY(30px)",
  },
  {
    title: "vanila",
    desc: "초콜릿처럼, 달콤하고 진하게 나는 향기",
    img: "/assets/images/perfumeImg/바닐라.jpg",
    backgroundColor: "#cfa875",
  },
  {
    title: "fruity",
    desc: "귀엽고 발랄하며, 달콤한 과일에서 나는 향기",
    img: "/assets/images/perfumeImg/프루티.jpg",
    alt: "#ff3d28",
    backgroundColor: "#ff6251",
    transform: "translateY(30px)",
  },
];
