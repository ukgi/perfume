// π μλ² ν΅μ  μ½λλ μ¬κΈ°μ μμ±ν΄ λ .
// νμ μ½λ λ¦¬ν©ν λ§νκ³  λ‘μ§ λ³κ²½ν΄λ³΄κΈ°

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
      console.log("μλ²λ‘λΆν° λμ°©ν λ°μ΄ν°π", data.data);
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
    // submitUserAnswer();
    getMockData();
  }, [getMockData, submitUserAnswer]);

  return (
    <div className={styles.body}>
      <h2>{userName}λμκ² κΌ­ λ§λ ν₯μκ° λμ°©νμ΅λλ€</h2>
      <GiftBox data={data} />
    </div>
  );
}
