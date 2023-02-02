import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./UserName.module.css";

export default function UserName() {
  const nameInput = useRef();

  useEffect(() => {
    return nameInput.current.focus();
  }, []);
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        animate={{
          scale: [0.2, 1.2, 1.2, 0.5, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "5%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatDelay: 1,
        }}
      >
        <motion.div
          className={styles.box}
          animate={{
            scale: [0.1, 1, 1, 0.5, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "5%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <div className={styles.content}>
            <input
              className={styles.input}
              ref={nameInput}
              type='text'
              placeholder='이름을 입력하세요'
            ></input>
            <button className={styles.button}>
              <span>완료</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
