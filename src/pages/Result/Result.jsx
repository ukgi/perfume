import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
import { useUserContext } from "../../context/UserContextApi";
import ReactElasticCarousel from "react-elastic-carousel";

export default function Result() {
  const { state } = useLocation();
  const { userName } = useUserContext();
  const navigate = useNavigate();

  return (
    <section className={styles.body}>
      <div>
        <h2 className={styles.title}>{userName}님을 위한 향수입니다</h2>
        <h3>이미지를 클릭하여 상세 정보를 확인하세요</h3>
      </div>

      <ReactElasticCarousel breakPoints={breakPoints}>
        {state.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => navigate(`/result/${data.id}`)}
          >
            <div className={styles.imgBox}>
              <img
                className={styles.cardImg}
                src={data.perfumeImageUrl}
                alt='perfumeImage'
                draggable={false}
              />
              <h3 className={styles.perfumeName}>{data.perfumeName}</h3>
            </div>
          </div>
        ))}
      </ReactElasticCarousel>
    </section>
  );
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
];
