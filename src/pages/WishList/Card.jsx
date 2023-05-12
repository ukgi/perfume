import React, { useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";
import { config as server } from "../../config";
import { BsFillTrophyFill } from "react-icons/bs";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function Card({ perfume, rankingCard, count, ranking }) {
  const { id, perfumeName, brandName, perfumeImageUrl } = perfume;
  const memberId = sessionStorage.getItem("id");
  const accessToken = sessionStorage.getItem("accessToken");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      .then((res) => {
        console.log(res);
        window.location.reload();
        handleClose();
      })
      .catch(console.error);
  };

  return (
    <div
      className={styles.card}
      id={rankingCard === true ? styles.rankingCard : styles.wishCard}
    >
      {rankingCard === true ? (
        <div>
          <img
            className={styles.perfumeImg}
            src={perfumeImageUrl}
            alt='perfumeImage'
          />
          <BsFillTrophyFill className={styles.trophy} />
          <span className={styles.rankingNumber}>{ranking}</span>
        </div>
      ) : (
        <img
          className={styles.perfumeImg}
          src={perfumeImageUrl}
          alt='perfumeImage'
        />
      )}

      <div className={styles.textBox}>
        <div className={styles.perfumeInfo}>
          <h5 className={styles.brandName}>{brandName}</h5>
          <h3 className={styles.perfumeName}>{perfumeName}</h3>
        </div>
        {rankingCard === true ? (
          <p className={styles.rankingCount}>{count}명이 추가했습니다</p>
        ) : (
          <button onClick={handleClickOpen} className={styles.deleteBtn}>
            삭제
          </button>
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            위시리스트에서 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>아니오</Button>
          <Button onClick={handleDeleteItem} autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
