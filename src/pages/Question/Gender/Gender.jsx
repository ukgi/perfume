import React from "react";
import styles from "./Gender.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { useUserContext } from "../../../context/UserContextApi";
import { container, item } from "../../../Animation/Variants";
import { useEffect } from "react";
import { useState } from "react";

export default function Gender() {
  const { setUser } = useUserContext();
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userAnswer")).name;
    setUserName(userName);
  }, []);

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h2 className={styles.title} variants={item}>
        {userName} 님의 성별을 고르세요
      </motion.h2>
      <div className={styles.cardSection}>
        {["남자", "여자"].map((gender, index) => (
          <motion.div key={index} variants={item}>
            <Card gender={gender} setUser={setUser} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
