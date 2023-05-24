import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Vim.module.css";

export default function Vim() {
  const videos = [
    "/assets/videos/videos04.mp4",
    "/assets/videos/storyVideo2.mp4",
    "/assets/videos/storyVideo3.mp4",
    "/assets/videos/storyVideo4.mp4",
  ];
  const [storedValue, setStoredValue] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = JSON.parse(localStorage.getItem("storyArray"));
      if (value) {
        setStoredValue(value);
      } else {
        setStoredValue(null);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [videos.length]);

  if (storedValue === null) {
    return (
      <div className={styles.loadingBody}>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            className={currentVideo === index ? styles.active : ""}
            autoPlay
            loop
            muted
            typeof='mp4'
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.storyBody}>
        <video
          src='/assets/videos/storyVideo3.mp4'
          autoPlay
          loop
          muted
          typeof='mp4'
        />

        <div className={styles.textBox}>
          {storedValue[4] === undefined || null || "" ? (
            <>
              <TypeAnimation
                sequence={[`${storedValue[0]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[6000, `${storedValue[1]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[10000, `${storedValue[2]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[16000, `${storedValue[3]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[22000, `아름다운 하루가 시작될 거 같다.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
            </>
          ) : (
            <>
              <TypeAnimation
                sequence={[1000, `${storedValue[0]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[6000, `${storedValue[1]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[10000, `${storedValue[2]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[16000, `${storedValue[3]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[22000, `${storedValue[4]}.`]}
                speed={(45, { type: "keyStrokeDelayInMs", value: 100 })}
                omitDeletionAnimation={true}
                wrapper='p'
                cursor={false}
                repeat={0}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}
