import React, { useEffect, useState } from "react";
import styles from "./WishList.module.css";
import axios from "axios";
import { config as server } from "../../config";
import Card from "./Card";

export default function WishList() {
  const id = sessionStorage.getItem("id");
  const accessToken = sessionStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `${accessToken}` },
  };

  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `${accessToken}` },
    };
    const handleWishList = () => {
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

  const handleAllDelete = () => {
    axios
      .delete(`${server.api}/member/wish/delete-all-element/${id}`, config)
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <div className={styles.body}>
      <section className={styles.banner}>
        <img src='/assets/images/sample03.jpg' alt='' />
        <div className={styles.bannerText}>
          <h2>당신이 선호하는 향수를 한 눈에 확인해보세요</h2>
          <h1>Wish List</h1>
        </div>
        <button className={styles.deleteBtn} onClick={handleAllDelete}>
          전체 삭제하기
        </button>
      </section>
      <section className={styles.itemList}>
        {typeof wishList === "string" ? (
          <h3>위시리스트가 비어있습니다</h3>
        ) : (
          wishList.map((perfume, index) => {
            return <Card key={index} perfume={perfume.perfume} />;
          })
        )}
      </section>
    </div>
  );
}
