import axios from "axios";
import React, { useState } from "react";
import { config as server } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ResultDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function ResultDetail() {
  const { perfumeId } = useParams();
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
      .then((res) => console.log(res))
      .catch(console.error);

    setOpen(false);
  };

  const {
    isLoading,
    isError,
    data: perfumeDetailData,
  } = useQuery(
    ["perfumeDetail", perfumeId],
    async () => {
      try {
        const data = await axios.get(
          `${server.api}/perfume/show-perfume/${perfumeId}`
        );
        return data.data;
      } catch (error) {
        console.error(error);
      }
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  if (isLoading)
    return (
      <div className={styles.subBody}>
        <h3>로딩중 ...</h3>
      </div>
    );
  if (isError)
    return (
      <div className={styles.subBody}>
        <h3>Error 😡</h3>
      </div>
    );

  return (
    <>
      {perfumeDetailData && (
        <div className={styles.body}>
          <div className={styles.sectionOne}>
            <div className={styles.sectionOneText}>
              <h1 className={styles.perfumeName}>
                {perfumeDetailData.perfume.perfumeName}
              </h1>
              <h2 className={styles.perfumeBrand}>
                {perfumeDetailData.perfume.brandName}
              </h2>
              <p className={styles.perfumeFeature}>
                {perfumeDetailData.perfume.perfumeFeature}
              </p>
              <button className={styles.wishBtn} onClick={handleClickOpen}>
                위시리스트에 추가하기
              </button>
            </div>
            <img
              className={styles.sectionOneImg}
              src={perfumeDetailData.perfume.perfumeImageUrl}
              alt=''
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
                <Button onClick={() => handleAddWishList(perfumeId)} autoFocus>
                  네
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className={styles.sectionTwo}>
            <img
              loading={"lazy"}
              decoding={"async"}
              className={styles.sectionTwoImg}
              src={`/assets/images/resultDetail/${
                JSON.parse(sessionStorage.getItem("userAnswer")).genderAnswer
              }_${
                JSON.parse(sessionStorage.getItem("userAnswer")).moodAnswer
              }.webp`}
              alt=''
            />
            <div className={styles.sectionTwoText}>
              <FaQuoteLeft style={{ color: "#ECE6D8", fontSize: "38px" }} />
              <h3 className={styles.sectionTwoTitle}>분위기 연출</h3>
              <span className={styles.sectionTwoDesc}>
                {perfumeDetailData.moodRecommend}
              </span>
            </div>
          </div>
          <div className={styles.sectionThree}>
            <div className={styles.sectionFourText} id={styles.sectionOne}>
              <BsAsterisk
                style={{
                  fontSize: "38px",
                  color: "white",
                  paddingBottom: "12px",
                }}
              />
              <h3 className={styles.sectionFourTitle}>
                이런 효과를 줄 수 있어요
              </h3>
              <span className={styles.sectionFourDesc}>
                <p>{perfumeDetailData.scentRecommend}</p>
              </span>
            </div>
            <div className={styles.sectionFourText} id={styles.sectionTwo}>
              <BsCalendarCheck
                style={{
                  fontSize: "38px",
                  color: "black",
                  paddingBottom: "12px",
                }}
              />
              <h3 className={styles.sectionFourTitle}>
                어떤 계절에 사용하면 좋을까요?
              </h3>
              <span className={styles.sectionFourDesc}>
                <p>{perfumeDetailData.seasonRecommend}</p>
              </span>
              <div className={styles.buttonContainer} id={styles.goToRootBtn}>
                <button
                  className={styles.returnRootBtn}
                  onClick={() => window.history.back()}
                >
                  이전 페이지로 돌아가기
                </button>
                <button
                  className={styles.returnRootBtn}
                  onClick={() => navigate("/services")}
                >
                  처음으로 돌아가기
                </button>
              </div>
            </div>
            <div className={styles.sectionFourText} id={styles.sectionThree}>
              <BsBook
                style={{
                  fontSize: "38px",
                  color: "white",
                  paddingBottom: "12px",
                }}
              />
              <h3 className={styles.sectionFourTitle}>
                나만의 향수 스토리를 확인해보세요
              </h3>
              <span className={styles.sectionFourDesc}>
                <p>
                  누구나 어느 것 하나 모난 것 없이 아름다운 향을 가지고
                  있습니다. 당신에게 어울리는 잔잔한 향수 스토리를 들려드릴게요.
                </p>
              </span>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.returnRootBtn}
                  onClick={() => navigate("/story")}
                >
                  나만의 향수 스토리 확인하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
