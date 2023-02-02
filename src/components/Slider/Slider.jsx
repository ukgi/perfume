import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import styles from "./Slider.module.css";

export default function Slider() {
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
          <h2>PersonalFume</h2>
          <p>당신의 향기를 찾아드립니다.</p>
        </div>
      </div>
      <input type='radio' name='slider' />
      <div className={styles.imgBx}>
        {/* <ParticlesBackground /> */}
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
        </div>
      </div>
    </div>
  );
}
