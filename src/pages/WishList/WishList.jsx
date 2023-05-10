import React, { useEffect, useState } from "react";
import styles from "./WishList.module.css";
import axios from "axios";
import { config as server } from "../../config";
import Card from "./Card";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

// 😡 중복코드

export default function WishList() {
  const id = sessionStorage.getItem("id");
  const accessToken = sessionStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `${accessToken}` },
  };
  const rankingCard = true;

  const [wishList, setWishList] = useState([]);
  const [wishListRanking, setWishListRanking] = useState([]);
  const [emptyList, setEmptyList] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `${accessToken}` },
    };
    const handleWishList = () => {
      axios
        .get("/data/WishList.json")
        .then((res) => {
          if ((res.status = 200)) {
            console.log(res.data);
            setEmptyList(false);
            setWishList(res.data);
          } else if ((res.status = 404)) {
            setEmptyList(true);
          }
        })
        .catch(console.error);
    };
    const handleWishListRanking = () => {
      axios
        .get("/data/WishListRanking.json")
        .then((res) => {
          console.log(res.data);
          setWishListRanking(res.data);
        })
        .catch(console.error);
    };
    handleWishList();
    handleWishListRanking();
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
        <div className={styles.bannerText}>
          <h2>당신이 선호하는 향수를 한 눈에 확인해보세요</h2>
          <h1>Wish List</h1>
        </div>
        <button className={styles.deleteBtn} onClick={handleClickOpen}>
          위시리스트 전체 삭제하기
        </button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              위시리스트를 모두 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>아니오</Button>
            <Button onClick={handleAllDelete} autoFocus>
              네
            </Button>
          </DialogActions>
        </Dialog>
      </section>
      <section className={styles.itemListRanking}>
        <h3>가장 많이 위시리스트에 담긴 향수를 만나보세요</h3>
        <div className={styles.rankingCardBox}>
          {wishListRanking.map((perfume, index) => {
            return (
              <Card
                key={index}
                perfume={perfume.perfume}
                rankingCard={rankingCard}
                count={perfume.count}
                ranking={index + 1}
              />
            );
          })}
        </div>
      </section>
      <section className={styles.itemList}>
        {emptyList === true ? (
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
