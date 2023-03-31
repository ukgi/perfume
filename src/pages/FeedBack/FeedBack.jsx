import React, { useState } from "react";
import styles from "./FeedBack.module.css";
import axios from "axios";
import { config } from "../../config";

export default function FeedBack() {
  const [feedBack, setFeedBack] = useState({
    serviceName: "",
    comment: "",
  });
  const [isFinish, setIsFinish] = useState(false);

  const handleServiceName = (e) =>
    setFeedBack((prev) => ({ ...prev, serviceName: e.target.id }));

  const handleComment = (e) =>
    setFeedBack((prev) => ({ ...prev, comment: e.target.value }));

  const submitFeedBack = async () => {
    axios
      .post(`${config.api}/feedback/save`, feedBack) //
      .then(() => {
        setIsFinish(true);
        setTimeout(() => {
          setIsFinish(false);
        }, 4000);
      });
  };

  return (
    <div className={styles.body}>
      <div className={styles.mainText}>
        <h1 className={styles.title}>
          인:향은 여러분의 정성어린 의견을 <br />
          적극 반영하겠습니다.
        </h1>
        <p className={styles.desc}>
          소중한 피드백을 해주신다면 감사합니다.
          <br /> 여러분의 불편함을 꼭 해결하겠습니다.
        </p>
      </div>

      <div className={styles.servicesRadio}>
        <h2>
          어떤 서비스에 대해 <br />
          피드백을 하고 싶으신가요?
        </h2>
        <div>
          <div onClick={handleServiceName}>
            <input type='radio' id='firstService' name='services' />
            <label htmlFor='firstService'>맞춤 향수 추천</label>
          </div>
          <div onClick={handleServiceName}>
            <input type='radio' id='secondService' name='services' />
            <label htmlFor='secondService'>유사 향수 추천</label>
          </div>
          <div onClick={handleServiceName}>
            <input type='radio' id='thirdService' name='services' />
            <label htmlFor='thirdService'>타인 향수 추천</label>
          </div>
        </div>
      </div>
      <div className={styles.feedBackContainer}>
        <h2>피드백 내용을 적어주세요</h2>
        <textarea type='text' onChange={handleComment} />
      </div>
      {isFinish && (
        <p className={styles.success}>
          피드백이 등록 되었습니다. 소중한 의견 감사합니다.
        </p>
      )}
      <button className={styles.submitBtn} onClick={submitFeedBack}>
        제출하기
      </button>
    </div>
  );
}
