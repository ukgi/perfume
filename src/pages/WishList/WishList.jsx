import React, { useEffect } from "react";
import styles from "./WishList.module.css";
import axios from "axios";
import { config } from "../../config";

export default function WishList() {
  useEffect(() => {
    try {
      const data = axios.get(
        `${config.api}/member/wish/show-list/${sessionStorage.getItem("id")}`
      );
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.body}>
      <section className={styles.banner}>
        <img src='/assets/images/sample03.jpg' alt='' />
        <div className={styles.bannerText}>
          <h2>당신이 선호하는 향수를 한 눈에 확인해보세요</h2>
          <h1>Wish List</h1>
        </div>
      </section>
      <section className={styles.itemList}></section>
    </div>
  );
}
