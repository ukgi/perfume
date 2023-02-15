import React from "react";
import { motion } from "framer-motion";
import styles from "./UserName.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContextApi";
import { useEffect } from "react";
import { useCallback } from "react";

export default function UserName() {
  const navigate = useNavigate();
  const handleUserName = (e) =>
    setUser((prev) => ({ ...prev, name: `${e.target.value}` }));

  // ⬇️ 커스텀 훅 만들어보기
  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.localStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);

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
              value={user.name}
              onChange={handleUserName}
            ></input>
            <button
              className={styles.button}
              onClick={() => {
                user ? navigate(`/gender`) : alert("이름을 입력해주세요!");
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
