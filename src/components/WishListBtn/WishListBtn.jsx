import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import styles from "./WishListBtn.module.css";
import { config as server } from "../../config";

export default function WishListBtn({ perfumeId }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddWishList = (perfumeId) => {
    const accessToken = sessionStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `${accessToken}` },
    };
    axios
      .post(
        `${server.api}/member/wish/select-wish-perfume`,
        {
          memberId: sessionStorage.getItem("id"),
          perfumeId,
        },
        config
      )
      .then((res) => console.log(res))
      .catch(console.error);

    setOpen(false);
  };

  return (
    <>
      <button className={styles.wishBtn} onClick={handleClickOpen}>
        위시리스트에 추가하기
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            위시리스트에 추가하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>아니오</Button>
          <Button onClick={() => handleAddWishList(perfumeId)} autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
