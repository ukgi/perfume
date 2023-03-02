// 📛 서버 통신 코드는 여기에 작성해 둠.
// 후에 코드 리팩토링하고 로직 변경해보기

import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../../context/UserContextApi";
import styles from "./ShowGiftBox.module.css";
import GiftBox from "./GiftBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
import axios from "axios";

export default function ShowGiftBox() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { user, userName } = useUserContext();

  const submitUserAnswer = useCallback(async () => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/survey/show-perfume-by-survey`,
        user
      );
      console.log("서버로부터 도착한 데이터🚀", data.data);
      // if (data.data.length === 0) navigate("/error");
      setData(data.data);
    } catch (error) {
      console.error(error);
      navigate("/error");
    }
  }, [user, navigate]);

  const getMockData = useCallback(async () => {
    try {
      const data = await axios.get("/data/survey.json");
      setData(data.data);
    } catch (error) {
      console.error(error);
      navigate("/error");
    }
  }, [navigate]);

  useEffect(() => {
    submitUserAnswer();
    // getMockData();
  }, [getMockData, submitUserAnswer]);

  return (
    <div className={styles.body}>
      <h2>{userName}님에게 꼭 맞는 향수가 도착했습니다</h2>
      <GiftBox data={data} />
    </div>
  );
}
