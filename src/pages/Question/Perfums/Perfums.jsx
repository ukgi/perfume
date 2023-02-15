import React from "react";
import styles from "./Perfums.module.css";
import Card from "./Card";
import { motion } from "framer-motion";
import { container, item } from "../../../Animation/Variants";
import { useEffect } from "react";
import { useUserContext } from "../../../context/UserContextApi";

export default function Fashion() {
  const { user, setUser } = useUserContext();
  useEffect(() => {
    console.log(user);
  }, [user]);

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
    title: "플로럴",
    desc: "아름답고 성숙한 플로럴",
    img: "/assets/images/perfumeImg/플로럴.jpg",
    backgroundColor: "#ff8e7f",
  },
  {
    title: "소피",
    desc: "깨끗하고 순수한 소피",
    img: "/assets/images/perfumeImg/소피.jpg",
    backgroundColor: "#89a5ea",
  },
  {
    title: "우디",
    desc: "상쾌하고 묵직한 우디",
    img: "/assets/images/perfumeImg/우디.jpg",
    backgroundColor: "#800000",
  },
  {
    title: "시트러스",
    desc: "상큼하지만 우아한 시트러스",
    img: "/assets/images/perfumeImg/시트러스.jpg",
    backgroundColor: "#ff9900",
  },
  {
    title: "바닐라",
    desc: "달콤하고 부드러운 바닐라",
    img: "/assets/images/perfumeImg/바닐라.jpg",
    backgroundColor: "#fcdaaf",
  },
  {
    title: "프루티",
    desc: "상큼하고 청순한 프루티",
    img: "/assets/images/perfumeImg/프루티.jpg",
    alt: "#ff3d28",
    backgroundColor: "#ff6251",
  },
];
