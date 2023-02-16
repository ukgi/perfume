import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../../context/UserContextApi";
import styles from "./Result.module.css";
import GiftBox from "./GiftBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";

export default function Result() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { user, userName } = useUserContext();

  const submitUserAnswer = useCallback(async () => {
    await fetch("http://43.200.94.119:8080/survey/show-perfume-by-survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("server data", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        return navigate("/error");
      });
  }, [user, navigate]);

  const getMockData = async () => {
    await fetch("/data/survey.json", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("서버로부터 받은 데이터", data);
        setData(data);
        console.log("data 상태", data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    console.log("질문에 대한 답변 context 상태", user);
    // submitUserAnswer();
    getMockData();
  }, [submitUserAnswer, user]);

  return (
    <div className={styles.body}>
      <h2>{userName}님에게 꼭 맞는 향수가 도착했습니다</h2>
      <GiftBox data={data} />
    </div>
  );
}
