import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
import { useUserContext } from "../../context/UserContextApi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

let prevPageX, prevScrollLeft, positionDiff;
let firstImg, arrowIcons;

export default function Result() {
  const { state } = useLocation();
  const { userName } = useUserContext();
  const navigate = useNavigate();
  const carousel = useRef();

  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const showHideIcons = () => {
    let scrollWidth =
      carousel.current.scrollWidth - carousel.current.clientWidth;
    arrowIcons[0].style.display =
      carousel.current.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display =
      carousel.current.scrollLeft === scrollWidth ? "none" : "block";
  };

  useEffect(() => {
    arrowIcons = document.querySelectorAll("svg");
    firstImg = document.querySelectorAll("img")[0];

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.current.scrollLeft +=
          icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
      });
    });
  }, []);

  const handleDragStart = (e) => {
    setIsDragStart(true);
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.current.scrollLeft;
  };

  const handleDragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    setIsDragging(true);
    carousel.current.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.current.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const handleDragStop = () => {
    setIsDragStart(false);
    carousel.current.classList.remove("dragging");

    if (!isDragging) return;
    setIsDragging(false);
  };

  return (
    <section className={styles.body}>
      <h2>{userName}님을 위한 향수입니다</h2>
      <div className={styles.wrapper}>
        <AiOutlineLeft
          style={{
            height: "46px",
            width: "46px",
            color: "black",
            fontSize: "1.2rem",
            lineHeight: "46px",
            cursor: "pointer",
            background: "white",
            textAlign: "center",
            borderRadius: "50%",
            left: "-20px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            display: "none",
          }}
          onClick={() => {}}
          id='left'
        />
        <div
          className={styles.carousel}
          onMouseMove={handleDragging}
          onTouchMove={handleDragging}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseUp={handleDragStop}
          onMouseLeave={handleDragStop}
          onTouchEnd={handleDragStop}
          ref={carousel}
        >
          {state.map((data, index) => (
            <img
              key={index}
              className={styles.cardImg}
              src={data.perfumeImageUrl}
              alt='perfumeImage'
              draggable={false}
              onClick={() => navigate(`/result/${data.id}`)}
            />
          ))}
        </div>
        <AiOutlineRight
          style={{
            height: "46px",
            width: "46px",
            color: "black",
            fontSize: "1.2rem",
            lineHeight: "46px",
            cursor: "pointer",
            background: "white",
            textAlign: "center",
            borderRadius: "50%",
            right: "-20px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          id='right'
        />
      </div>
    </section>
  );
}
