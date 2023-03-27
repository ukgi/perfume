import React from "react";
import { motion } from "framer-motion";
import styles from "./UserName.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContextApi";
import { useKakaoLoginUserContext } from "../../context/KakaoLoginUserContextApi";

export default function UserName() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userName, setUserName } = useUserContext();
  const { setRecommend, isRecommend } = useKakaoLoginUserContext();

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

  return (
    <div className={styles.container}>
      {isRecommend ? (
        <h2 className={styles.recommenderTitle}>당신의 이름을 입력하세요</h2>
      ) : (
        <p></p>
      )}
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
