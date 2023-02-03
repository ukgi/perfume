import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";
import { motion } from "framer-motion";

export default function Slider() {
  const navigate = useNavigate();
  return (
    <div className={styles.slider}>
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
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            PersonalFume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.8 } }}
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
          <h2>Slide two</h2>
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
            onClick={() => navigate("/userName")}
          >
            <span>시작하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
