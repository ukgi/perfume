import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Perfums.module.css";

export default function Card({ info }) {
  const { title, desc, img, backgroundColor } = info;
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.localStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);

  const handlePerfums = () =>
    setUser((prev) => ({
      ...prev,
      scentAnswer: title,
    }));

  return (
    <div
      className={styles.card}
      onClick={() => {
        handlePerfums();
        navigate("/mood", { state: { title } });
      }}
    >
      <img className={styles.cardImg} src={img} alt='' />
      <div
        className={styles.cardIntro}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
}
