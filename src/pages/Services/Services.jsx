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
      bannerBackground: "rgba(177, 176, 130, 0.7)",
      contentBackground: "rgba(230, 229, 212, 0.7)",
      textColor: "#9b7c39",
      borderBottomColor: "rgba(170, 156, 125, 0.7)",
    },
    {
      title: "유사 향수 추천",
      dec: "기존에 사용하던 향수와 유사한, 또 다른 향수 브랜드 제품을 추천해줍니다",
      bannerBackground: "rgba(95, 133, 163, 0.7)",
      contentBackground: "rgba(127, 163, 190, 0.7)",
      textColor: "#2e486b",
      borderBottomColor: "rgba(83, 116, 141, 0.7)",
    },
    {
      title: "타인 향수 추천",
      dec: "소중한 사람에게 잘 어울릴 거 같은 향수를 지금 바로 만나보세요",
      bannerBackground: "rgba(187, 106, 53, 0.7)",
      contentBackground: "rgba(250, 191, 152, 0.7)",
      textColor: "#9b0015",
      borderBottomColor: "rgba(168, 91, 40, 0.7)",
    },
  ];
  return (
    <div className={styles.body}>
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
    </div>
  );
}
