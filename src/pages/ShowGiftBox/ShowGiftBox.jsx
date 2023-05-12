import React, { useEffect } from "react";
import { useUserContext } from "../../context/UserContextApi";
import styles from "./ShowGiftBox.module.css";
import GiftBox from "./GiftBox";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ShowGiftBox() {
  const navigate = useNavigate();

  const { user, userName } = useUserContext();

  const {
    isLoading,
    error,
    data: surveyData,
  } = useQuery(["surveyData"], async () => {
    try {
      const data = await axios.post(
        `${config.api}/survey/show-perfume-by-survey`,
        user
      );
      return data.data.slice(0, 10);
    } catch (error) {
      console.error(error);
      navigate("/error");
    }
  });

  useEffect(() => {
    const audio = new Audio();
    audio.src = "/assets/audio/audio.mp3";
    audio.play();
  }, []);

  return (
    <div className={styles.body}>
      {isLoading && <div>로딩중 ...</div>}
      {error && <div>Error 😱</div>}
      {surveyData && (
        <>
          <h2 className={styles.title}>
            {userName}님에게 꼭 맞는 향수가 도착했습니다
          </h2>
          <GiftBox data={surveyData} />
        </>
      )}
    </div>
  );
}
