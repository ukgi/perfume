import React, { useState } from "react";
import styles from "./Login.module.css";
import { motion } from "framer-motion";
import { blogList } from "./blog-list";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

export default function Login() {
  const [isScrollDown, setIsScrollDown] = useState(false);

  return (
    <div className={styles.body}>
      {isScrollDown ? (
        <BsArrowUpCircleFill
          className={styles.moveToDownBtn}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setIsScrollDown(false);
          }}
        ></BsArrowUpCircleFill>
      ) : (
        <BsArrowDownCircleFill
          className={styles.moveToDownBtn}
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
            setIsScrollDown(true);
          }}
        ></BsArrowDownCircleFill>
      )}
      {blogList.map((item, index) => {
        if (index === 0) {
          return (
            <div className={styles.container} key={index}>
              <Card image={item.image} h1='향수 추천 서비스' p={item.p} />
            </div>
          );
        } else {
          return (
            <div className={styles.container} key={index}>
              <Card
                image={item.image}
                h2={item.h2}
                p={item.p}
                href={item.href}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

function Card({ image, h1, h2, p, id, href }) {
  return (
    <motion.div
      className={styles.card}
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      {h1 && <motion.h1 variants={textAnimate}>{h1}</motion.h1>}
      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
      <div className={styles.stepThreeImageBox}>
        <motion.img
          src={image}
          alt=''
          variants={imageAnimate}
          height={200}
        ></motion.img>
        {href && (
          <motion.a variants={imageAnimate} href={href}>
            <img
              src='/assets/images/kakaoLogo/kakaoLoginBtn.png'
              alt='kakaoLogo'
            />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
