import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Card({ info }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const navigate = useNavigate();
  const {
    title,
    dec,
    bannerBackground,
    contentBackground,
    textColor,
    borderBottomColor,
  } = info;
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        transition: { duration: 1.2 },
      }}
      style={{ backgroundColor: contentBackground }}
    >
      <div
        className={styles.sliderText}
        style={{
          backgroundColor: bannerBackground,
          borderBottom: `20px solid ${borderBottomColor}`,
        }}
      >
        <h3 className={styles.sliderTextTitle}>{title}</h3>
      </div>
      <div className={styles.content}>
        <p style={{ color: textColor }}>{dec}</p>
        <button
          style={{
            backgroundColor: isHover ? `${bannerBackground}` : "inherit",
            color: isHover ? "white" : textColor,
            borderColor: isHover ? "white" : textColor,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.btn}
          onClick={() => {
            if (title === "맞춤 향수 추천") {
              return navigate("/userName");
            } else if (title === "유사 향수 추천") {
              return navigate("/brandName");
            } else {
              sessionStorage.getItem("accessToken")
                ? navigate("/recommend")
                : navigate("/login");
            }
          }}
        >
          <span>Learn more</span>
          <AiOutlineArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
