import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import styles from "./Mood.module.css";
import { motion } from "framer-motion";
import { handleMood } from "./HandleMood";
import { container } from "../../../Animation/Variants";

export default function Mood() {
  const { state } = useLocation();
  const { title, alt } = state;
  console.log("state", state);
  const [mood, setMood] = useState([]);
  const [bgColor, setBgColor] = useState(alt);

  useEffect(() => {
    handleMood(title, setMood);
    setBgColor(alt);
  }, [title]);

  return (
    <motion.div
      className={styles.container}
      style={{ backgroundColor: bgColor }}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h2 className={styles.title} variants={container}>
        선택하신 향기와 어울리는 분위기를 골라주세요
      </motion.h2>
      {mood.map((item, index) => {
        return <Card key={index} info={item} />;
      })}
    </motion.div>
  );
}
