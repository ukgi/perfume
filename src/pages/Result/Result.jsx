import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
import { useUserContext } from "../../context/UserContextApi";
import ReactElasticCarousel from "react-elastic-carousel";
import { AiFillHeart } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import axios from "axios";
import { config as server } from "../../config";

export default function Result() {
  const { state } = useLocation();
  const { userName } = useUserContext();
  const navigate = useNavigate();
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
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);

    setOpen(false);
  };

  return (
    <section className={styles.body}>
      <div>
        <h2 className={styles.title}>{userName}님을 위한 향수입니다</h2>
        <h3>이미지를 클릭하여 상세 정보를 확인하세요</h3>
      </div>

      <ReactElasticCarousel breakPoints={breakPoints}>
        {state.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imgBox}>
              <AiFillHeart
                className={styles.wishBtn}
                onClick={handleClickOpen}
              />
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
                  <Button
                    onClick={() => {
                      return handleAddWishList(data.id);
                    }}
                    autoFocus
                  >
                    네
                  </Button>
                </DialogActions>
              </Dialog>
              <img
                className={styles.cardImg}
                src={data.perfumeImageUrl}
                alt='perfumeImage'
                draggable={false}
                onClick={() => navigate(`/result/${data.id}`)}
              />
              <h3 className={styles.perfumeName}>{data.perfumeName}</h3>
            </div>
          </div>
        ))}
      </ReactElasticCarousel>
    </section>
  );
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
];
