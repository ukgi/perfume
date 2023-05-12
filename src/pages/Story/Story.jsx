import React from "react";
import styles from "./Story.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserContext } from "../../context/UserContextApi";
import { config } from "../../config";
import { motion } from "framer-motion";
import { brandPerfume } from "../../Animation/Variants";
import { TypeAnimation } from "react-type-animation";
import BackBtn from "../../components/BackBtn/BackBtn";
import RootBtn from "../../components/RootBtn/RootBtn";
import { useNavigate } from "react-router-dom";

export default function Story() {
  const navigate = useNavigate();
  const { user, userName } = useUserContext();
  const { isLoading, isError, data } = useQuery(
    ["story", user],
    async () => {
      try {
        const data = await axios.post(`${config.api}/perfume/make-story`, {
          ...user,
          name: userName,
        });
        console.log(data.data.choices[0].text);
        const splitData = data.data.choices[0].text.split(".");
        splitData.pop();
        splitData.shift();
        console.log(splitData);
        return splitData;
      } catch (error) {
        console.error(error);
      }
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  if (isLoading)
    return (
      <div className={styles.subBody}>
        <motion.img
          initial='hidden'
          animate='visible'
          variants={brandPerfume}
          src='/assets/images/향수병6.png'
          alt=''
          id={styles.perfumeBottle}
        />
        <h3>이야기를 만드는 중입니다. 잠시만 기다려주세요.</h3>
      </div>
    );
  if (isError)
    return (
      <div className={styles.subBody}>
        <h3>Error 😡</h3>
      </div>
    );

  return (
    <div className={styles.body}>
      <div className={styles.videoBox}>
        <video
          src='/assets/videos/storyVideo3.mp4'
          autoPlay
          loop
          muted
          typeof='mp4'
        ></video>
        <audio src='/assets/audio/audio.mp3' autoPlay loop></audio>
      </div>
      <div className={styles.textBox}>
        <TypeAnimation
          sequence={
            data[3] === undefined || null
              ? [
                  `${data[0]}`,
                  3000,
                  `${data[1]}`,
                  3000,
                  `${data[2]}`,
                  3000,
                  `아름다운 하루가 시작될 거 같다`,
                  3000,
                ]
              : [
                  `${data[0]}`,
                  3000,
                  `${data[1]}`,
                  3000,
                  `${data[2]}`,
                  3000,
                  `${data[3]}`,
                  3000,
                ]
          }
          deletionSpeed={{ type: "keyStrokeDelayInMs", value: 50 }}
          omitDeletionAnimation={true}
          wrapper='p'
          cursor={false}
          repeat={0}
          style={{
            width: "800px",
            paddingTop: "300px",
            fontSize: "2em",
            display: "inline-block",
            color: "black",
            textAlign: "center",
            fontFamily: "GangwonEdu_OTFBoldA",
          }}
        />
      </div>
      <div className={styles.btnBox}>
        <button
          className={styles.allStoryBtn}
          onClick={() =>
            navigate("/allStory", {
              state: data,
            })
          }
        >
          전체 이야기 확인
        </button>
        <RootBtn />
        <BackBtn />
      </div>
    </div>
  );
}
