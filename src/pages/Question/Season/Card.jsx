import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Season.module.css";
import { useUserContext } from "../../../context/UserContextApi";

export default function Card({ season }) {
  const { seasonTitle, color, img } = season;
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.localStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);
  const handleSeason = () =>
    setUser((prev) => ({
      ...prev,
      seasonAnswer: seasonTitle,
    }));

  return (
    <div
      className={styles.card}
      onClick={() => {
        handleSeason();
        navigate("/styles");
      }}
    >
      <div className={styles.circle} style={{ backgroundColor: color }}>
        <h3>{seasonTitle}</h3>
      </div>
      <div className={styles.content}>
        <img className={styles.img} src={img} alt=''></img>
      </div>
    </div>
  );
}
