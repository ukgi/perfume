import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Mood.module.css";

export default function Card({ info }) {
  const { mood, img, desc } = info;
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);
  const handleMood = () =>
    setUser((prev) => ({
      ...prev,
      moodAnswer: mood,
    }));

  return (
    <div
      className={styles.card}
      onClick={() => {
        handleMood();
        navigate("/season");
      }}
    >
      <img className={styles.faceFront} id={styles.front} src={img} alt='' />
      <div className={styles.faceBack} id={styles.back}>
        <div className={styles.backMoodDescContainer}></div>
        <p className={styles.moodDesc}>{desc}</p>
      </div>
    </div>
  );
}
