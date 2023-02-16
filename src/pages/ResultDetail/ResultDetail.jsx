import React from "react";
import { useLocation } from "react-router-dom";

export default function ResultDetail() {
  const { state } = useLocation();
  console.log("state 값", state);
  return (
    <div>
      {state.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.perfume.perfumeName}</h2>
            <img src={item.perfume.perfumeImageUrl} alt='' />
          </div>
        );
      })}
    </div>
  );
}
