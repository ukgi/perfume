import React, { useState } from "react";
import styles from "./Perfums.module.css";
import Card from "./Card";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";

export default function Fashion() {
  const [isHover, setIsHover] = useState(false);
  const [bgColor, setBgColor] = useState("#ebf5fc");

  const handleMouseEnter = (e) => {
    setBgColor(e.target.alt);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h2 className={styles.title} variants={container}>
        원하시는 향기를 고르세요
      </motion.h2>
      <div
        className={styles.cardSection}
        style={{
          backgroundColor: isHover ? `${bgColor}` : "#ebf5fc",
          transition: " all 0.5s ease-in-out",
        }}
      >
        {perfums.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Card info={card} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const perfums = [
  {
    title: "FLORAL",
    desc: "아름답고 성숙한 플로럴",
    img: "/assets/images/perfumeImg/플로럴.jpg",
    alt: "#ffcdc6",
    backgroundColor: "#ff8e7f",
  },
  {
    title: "SOAPY",
    desc: "깨끗하고 순수한 소피",
    img: "/assets/images/perfumeImg/소피.jpg",
    alt: "#aabff3",
    backgroundColor: "#89a5ea",
  },
  {
    title: "WODDY",
    desc: "상쾌하고 묵직한 우디",
    img: "/assets/images/perfumeImg/우디.jpg",
    alt: "#9c4d1f",
    backgroundColor: "#800000",
  },
  {
    title: "CITRUS",
    desc: "상큼하지만 우아한 시트러스",
    img: "/assets/images/perfumeImg/시트러스.jpg",
    alt: "#ffb74a",
    backgroundColor: "#ff9900",
  },
  {
    title: "VANILLA",
    desc: "달콤하고 부드러운 바닐라",
    img: "/assets/images/perfumeImg/바닐라.jpg",
    alt: "#fcedad",
    backgroundColor: "#fcdaaf",
  },
  {
    title: "FRUITY",
    desc: "상큼하고 청순한 프루티",
    img: "/assets/images/perfumeImg/프루티.jpg",
    alt: "#ff3d28",
    backgroundColor: "#ff6251",
  },
];
