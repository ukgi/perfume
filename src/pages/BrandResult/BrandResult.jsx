import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BrandResult.module.css";
import Card from "./Card";

export default function BrandResult() {
  const { state } = useLocation();

  console.log("state", state);

  return (
    <div className={styles.container}>
      {state &&
        state.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
    </div>
  );
}
