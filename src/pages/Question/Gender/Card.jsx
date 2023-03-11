import React, { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Gender.module.css";

export default function Card({ gender }) {
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();

  const storeUserAnswer = useCallback(async () => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    storeUserAnswer();
  }, [storeUserAnswer]);

  const handleGender = () =>
    setUser((prev) => ({ ...prev, genderAnswer: gender }));

  return (
    <div
      className={styles.card}
      onClick={() => {
        handleGender();
        navigate("/perfums");
      }}
      style={
        gender === "남자"
          ? {
              background: `url('/assets/images/man.jpg') center / cover no-repeat`,
            }
          : {
              background: `url('/assets/images/woman.jpg')  center / cover no-repeat`,
            }
      }
    >
      <div className={styles.circle}>
        <h3>{gender === "남자" ? "Man" : "Woman"}</h3>
      </div>
    </div>
  );
}
