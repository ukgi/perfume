import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Season.module.css";
import { useUserContext } from "../../../context/UserContextApi";

export default function Card({ season }) {
  const { seasonTitle, img } = season;
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
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
      <div className={styles.shape}>
        <img className={styles.img} src={img} alt='' />
        <div className={styles.content}>
          <div>
            <h2>{seasonTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
