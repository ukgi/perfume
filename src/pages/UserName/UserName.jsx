import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./UserName.module.css";
import { useNavigate } from "react-router-dom";

export default function UserName() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const handleUserName = (e) => setUserName(e.target.value);
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          className={styles.box}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={styles.content}>
            <input
              className={styles.input}
              type='text'
              placeholder='Your Name'
              value={userName}
              onChange={handleUserName}
            ></input>
            <button
              className={styles.button}
              onClick={() => {
                userName
                  ? navigate(`/${userName}/question01`)
                  : alert("이름을 입력해주세요!");
              }}
            >
              <span>Let's start</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
