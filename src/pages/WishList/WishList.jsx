import React, { useEffect, useState } from "react";
import styles from "./WishList.module.css";
import axios from "axios";
import { config as server } from "../../config";
import Card from "./Card";

export default function WishList() {
  const id = sessionStorage.getItem("id");
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const handleWishList = () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const config = {
        headers: { Authorization: `${accessToken}` },
      };
      axios
        .get(`${server.api}/member/wish/show-list/${id}`, config)
        .then((res) => {
          console.log(res.data);
          setWishList(res.data);
        })
        .catch(console.error);
    };
    handleWishList();
  }, [id]);

  return (
    <div className={styles.body}>
      <section className={styles.banner}>
        <img src='/assets/images/sample03.jpg' alt='' />
        <div className={styles.bannerText}>
          <h2>당신이 선호하는 향수를 한 눈에 확인해보세요</h2>
          <h1>Wish List</h1>
        </div>
      </section>
      <section className={styles.itemList}>
        {wishList.map((perfume) => {
          return <Card perfume={perfume.perfume} />;
        })}
      </section>
    </div>
  );
}
