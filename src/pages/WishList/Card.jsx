import React from "react";
import styles from "./Card.module.css";
import axios from "axios";
import { config as server } from "../../config";

export default function Card({ perfume }) {
  const { id, perfumeName, brandName, perfumeImageUrl } = perfume;
  const memberId = sessionStorage.getItem("id");
  const accessToken = sessionStorage.getItem("accessToken");

  const handleDeleteItem = () => {
    axios
      .delete(`${server.api}/member/wish/delete-selected-perfume`, {
        data: {
          memberId,
          perfumeId: id,
        },
        headers: { Authorization: `${accessToken}` },
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.perfumeImg}
        src={perfumeImageUrl}
        alt='perfumeImage'
      />
      <div className={styles.textBox}>
        <h5 className={styles.brandName}>{brandName}</h5>
        <h3 className={styles.perfumeName}>{perfumeName}</h3>
      </div>
      <button onClick={handleDeleteItem} className={styles.deleteBtn}>
        삭제하기
      </button>
    </div>
  );
}
