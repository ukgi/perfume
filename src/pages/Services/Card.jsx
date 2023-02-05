import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.css";
import { motion } from "framer-motion";

export default function Card({ info }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const navigate = useNavigate();
  const { title, dec, background } = info;
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
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
