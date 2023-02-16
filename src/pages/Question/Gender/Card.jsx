import React, { useEffect } from "react";
import { useCallback } from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContextApi";
import styles from "./Gender.module.css";

const manCircle = {
  backgroundColor: "#0077ff",
};
const womanCircle = {
  backgroundColor: "#f064f5",
};

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
    >
      <div
        className={styles.circle}
        style={gender === "남자" ? manCircle : womanCircle}
      >
        <h3>{gender}</h3>
      </div>
      <div className={styles.content}>
        {gender === "남자" ? (
          <FcBusinessman className={styles.manIcon} />
        ) : (
          <FcBusinesswoman className={styles.womanIcon} />
        )}
      </div>
    </div>
  );
}
