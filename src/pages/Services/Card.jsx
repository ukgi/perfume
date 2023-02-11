import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.css";
import { motion } from "framer-motion";

export default function Card({ info }) {
  const item = {
    hidden: {
      opacity: 1,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const navigate = useNavigate();
  const { title, dec, background } = info;
  return (
    <motion.div
      className={styles.card}
      variants={item}
      whileHover={{
        transition: { duration: 1.2 },
      }}
    >
      <div className={styles.sliderText} style={{ background }}>
        <h3 className={styles.sliderTextTitle}>{title}</h3>
      </div>
      <div className={styles.content}>
        <p>{dec}</p>
        <button
          style={{
            backgroundColor: isHover ? `${background}` : "inherit",
            color: isHover ? "white" : "inherit",
            borderColor: isHover ? "white" : "inherit",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.btn}
          onClick={() => {
            if (title === "맞춤 향수 추천") {
              return navigate("/userName");
            }
          }}
        >
          시작하기
        </button>
      </div>
    </motion.div>
  );
}
