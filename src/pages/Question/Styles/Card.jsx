import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Styles.module.css";

export default function Card({ style }) {
  const { title, img } = style;
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const storeUserAnswer = useCallback(async () => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);
  const handleStyle = () =>
    setUser((prev) => ({
      ...prev,
      styleAnswer: title,
    }));

  return (
    <div
      className={styles.box}
      onClick={() => {
        navigate("/showGiftBox");
        handleStyle();
      }}
    >
      <h3 className={styles.cardOneTitle}>{title}</h3>
      <img className={styles.img} src={img} alt='' />
    </div>
  );
}
