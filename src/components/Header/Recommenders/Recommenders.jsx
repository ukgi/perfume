import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import styles from "./Recommenders.module.css";

export default function Recommenders() {
  const { data: recommenders } = useQuery(["recommenders"], async () => {
    const data = await axios.get("data/recommendData.json");
    return data.data.recommendationList;
  });

  return (
    <div>
      {recommenders && (
        <span className={styles.recommenders}>{recommenders.length}</span>
      )}
    </div>
  );
}
