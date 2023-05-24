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
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import WishListBtn from "../../components/WishListBtn/WishListBtn";
import ProgressiveImage from "react-progressive-graceful-image";

export default function Card({ perfume, rankingCard, count, ranking }) {
  const { id, perfumeName, brandName, perfumeImageUrl } = perfume;
  const memberId = sessionStorage.getItem("id");
  const accessToken = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();

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
          <ProgressiveImage src={perfumeImageUrl}>
            {(src, loading) => {
              return (
                <img
                  className={
                    loading ? styles.cardImgLoading : styles.perfumeImg
                  }
                  src={src}
                  alt='perfumeImage'
                  onClick={() => {
                    navigate(`/brandDetail/${id}`, { state: perfume });
                  }}
                />
              );
            }}
          </ProgressiveImage>
          <BsFillTrophyFill className={styles.trophy} />
          <span className={styles.rankingNumber}>{ranking}</span>
        </div>
      ) : (
        <img
          className={styles.perfumeImg}
          src={perfumeImageUrl}
          alt='perfumeImage'
          onClick={() => {
            navigate(`/brandDetail/${id}`, { state: perfume });
          }}
        />
      )}

      <div className={styles.textBox}>
        <div className={styles.perfumeInfo}>
          <h5 className={styles.brandName}>{brandName}</h5>
          <h3 className={styles.perfumeName}>{perfumeName}</h3>
        </div>
        {rankingCard === true ? (
          <div style={{ textAlign: "center" }}>
            <WishListBtn perfumeId={id} option='wishList' />
            <p className={styles.rankingCount}>{count}명이 추가했습니다</p>
          </div>
        ) : (
          <div>
            <IconButton onClick={handleClickOpen} className={styles.deleteBtn}>
              <DeleteIcon />
            </IconButton>
          </div>
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
