import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import styles from "./Mood.module.css";
export default function Mood() {
  const { state } = useLocation();
  console.log(state);
  const [mood, setMood] = useState([]);

  const handleMood = (state) => {
    if (state === "FLORAL") {
      return setMood([
        {
          mood: "달콤한",
          img: "/assets/images/mood/달콤한.jpg",
          desc: "코 끝을 스치는 달콤함",
        },
        {
          mood: "사랑스러운",
          img: "/assets/images/mood/사랑스러운.jpg",
          desc: "눈에 꿀이 떨어질 거 같은 사랑스러움",
        },
        {
          mood: "싱그러운",
          img: "/assets/images/mood/싱그러운.jpg",
          desc: "상큼한 라임과 같은 싱그러움",
        },
        {
          mood: "포근한",
          img: "/assets/images/mood/포근한.jpg",
          desc: "이불 속 커피 한잔과 같은 포근함",
        },
      ]);
    }
  };

  useEffect(() => {
    return handleMood(state);
  }, [state]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        선택하신 향기와 어울리는 분위기를 골라주세요
      </h2>
      {mood.map((item, index) => {
        return <Card key={index} info={item} />;
      })}
    </div>
  );
}
