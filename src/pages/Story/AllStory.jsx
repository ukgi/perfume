import React from "react";
import { useLocation } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import styles from "./AllStory.module.css";

export default function AllStory() {
  const { state } = useLocation();
  let allStory = [];
  state.map((p) => {
    return (allStory += p);
  });
  console.log(allStory);
  return (
    <div className={styles.body}>
      <p>{allStory}</p>
      <BackBtn />
    </div>
  );
}
