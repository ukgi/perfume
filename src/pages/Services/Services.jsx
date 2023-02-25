import React from "react";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
import Card from "./Card";

export default function Services() {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

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
      title: "타인 향수 추천",
      dec: "소중한 사람에게 잘 어울릴 거 같은 향수를 지금 바로 만나보세요",
      background: "#9dff8a",
    },
  ];
  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {servicesInfo.map((info, index) => (
        <div key={index}>
          <Card info={info} />
        </div>
      ))}
    </motion.div>
  );
}
