import React from "react";
import styles from "./RootBtn.module.css";
import { useNavigate } from "react-router-dom";

export default function RootBtn() {
  const navigate = useNavigate();
  return (
    <button className={styles.rootBtn} onClick={() => navigate("/services")}>
      처음으로
    </button>
  );
}
