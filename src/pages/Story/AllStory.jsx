import React from "react";
import { useLocation } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";

export default function AllStory() {
  const { state } = useLocation();
  let allStory = [];
  state.map((p) => {
    return (allStory += p);
  });
  console.log(allStory);
  return (
    <div
      style={{
        padding: "32px 100px",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "32px", color: "white" }}>{allStory}</p>
      <BackBtn />
    </div>
  );
}
