import React from "react";
import { motion } from "framer-motion";
import styles from "./UserName.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContextApi";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";
import { useState } from "react";

export default function UserName() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userName, setUserName } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleUserName = (e) => setUserName(e.target.value);

  const handleRecommend = () => {
    setRecommend((prev) => ({ ...prev, recommender: userName }));
    navigate("/gender", { state: state.kakaoNickname });
  };

  document.onkeydown = (e) => {
    /* F5, Ctrl+r, Ctrl+F5 */
    if (e.keyCode === 116 || (e.ctrlKey === true && e.keyCode === 82)) {
      e.cancelBubble = true;
      e.returnValue = false;
      navigate(`/recommend/${state.kakaoNickname}/${state.id}`);
      return false;
    }
  };

  window.addEventListener("beforeunload", () => {
    navigate(`/recommend/${state.kakaoNickname}/${state.id}`);
  });

  window.addEventListener("load", () => {
    navigate(`/recommend/${state.kakaoNickname}/${state.id}`);
  });

  // window.location.reload() && window.history.back();

  const handleInputFocus = () => {
    return setIsInputFocus(true);
  };

  const handleInputBlur = () => {
    return setIsInputFocus(false);
  };

  return (
    <div className={styles.container}>
      <h2
        className={styles.recommenderTitle}
        style={
          isInputFocus ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        당신의 이름을 입력하세요
      </h2>
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
              value={userName}
              onChange={handleUserName}
              required={true}
              style={{ color: "white" }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></input>
            <div className={styles.underline}></div>
            <label className={styles.label}>Name</label>
            <button
              className={styles.button}
              onClick={() => {
                isRecommend
                  ? handleRecommend()
                  : userName
                  ? navigate(`/gender`, { state: userName })
                  : alert("이름을 입력해주세요!");
              }}
            >
              <span>완료</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
