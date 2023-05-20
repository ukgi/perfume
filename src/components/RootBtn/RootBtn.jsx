import React from "react";
import styles from "./RootBtn.module.css";
import { useNavigate } from "react-router-dom";

export default function RootBtn({ option }) {
  const navigate = useNavigate();
  return (
    <button
      className={
        option === "brandName" ? styles.rootBtnBrandName : styles.rootBtn
      }
      onClick={() => navigate("/services")}
    >
      처음으로
    </button>
  );
}
