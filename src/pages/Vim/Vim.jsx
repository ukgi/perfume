import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Vim.module.css";

export default function Vim() {
  const [storedValue, setStoredValue] = useState(null);

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

  if (storedValue === null) {
    return <div className={styles.loadingBody}></div>;
  }
  return (
    <div className={styles.storyBody}>
      <div className={styles.textBox}>
        {storedValue[3] === undefined || null ? (
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
              sequence={[16000, `아름다운 하루가 시작될 거 같다.`]}
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
          </>
        )}
      </div>
    </div>
  );
}
