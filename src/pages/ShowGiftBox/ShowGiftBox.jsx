// 📛 서버 통신 코드는 여기에 작성해 둠.
// 후에 코드 리팩토링하고 로직 변경해보기

import React from "react";
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
