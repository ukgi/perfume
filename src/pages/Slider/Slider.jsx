import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";
import { motion } from "framer-motion";

export default function Slider() {
  const navigate = useNavigate();
  return (
    <motion.div
      className={styles.slider}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <input type='radio' name='slider' defaultChecked />
      <div className={styles.imgBx}>
        <video
          src='/assets/videos/videos01.mp4'
          autoPlay
          loop
          muted
          typeof='mp4'
        ></video>
        <img src='/assets/images/mask.jpg' alt='' className={styles.mask} />
        <div className={styles.content}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            PersonalFume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            당신의 향기를 찾아드립니다.
          </motion.p>
        </div>
      </div>
      <input type='radio' name='slider' />
      <div className={styles.imgBx}>
        <img src='/assets/images/2.jpg' alt='' />
        <div className={styles.content}>
          <h2>Story</h2>
          <p>
            인류 최초의 화장품이 향수인 것을 알고 있나요?
            <br />
            당신이 향수를 찾는 이유는 본능입니다. 그 본능에 꼭 맞는 향수를
            우리가 추천해드릴게요
          </p>
        </div>
      </div>
      <input type='radio' name='slider' />
      <div className={styles.imgBx}>
        <img src='/assets/images/3.jpg' alt='' />
        <div className={styles.content}>
          <h2>Slide Three</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            expedita vero consequuntur asperiores cupiditate ipsum aut et
            doloribus, repudiandae tenetur veritatis laboriosam inventore
            dolorem impedit ratione quod mollitia ipsam nostrum.
          </p>
        </div>
      </div>
      <input type='radio' name='slider' />
      <div className={styles.imgBx}>
        <img src='/assets/images/4.jpg' alt='' />
        <div className={styles.content}>
          <h2>Slide Four</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            expedita vero consequuntur asperiores cupiditate ipsum aut et
            doloribus, repudiandae tenetur veritatis laboriosam inventore
            dolorem impedit ratione quod mollitia ipsam nostrum.
          </p>
        </div>
      </div>
      <input type='radio' name='slider' />
      <div className={styles.imgBx}>
        <img src='/assets/images/5.jpg' alt='' />
        <div className={styles.content}>
          <h2>Slide Five</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            expedita vero consequuntur asperiores cupiditate ipsum aut et
            doloribus, repudiandae tenetur veritatis laboriosam inventore
            dolorem impedit ratione quod mollitia ipsam nostrum.
          </p>
          <button
            className={styles.button}
            onClick={() => navigate("/services")}
          >
            <span>시작하기</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
