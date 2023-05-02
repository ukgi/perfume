import React from "react";
import styles from "./Story.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserContext } from "../../context/UserContextApi";
import { config } from "../../config";

export default function Story() {
  const { user, userName } = useUserContext();
  const { isLoading, isError, data } = useQuery(
    ["story"],
    async () => {
      try {
        const data = await axios.post(`${config.api}/perfume/make-story`, {
          ...user,
          name: userName,
        });
        return data.data;
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
      <img
        loading={"lazy"}
        decoding={"async"}
        className={styles.sectionTwoImg}
        src={`/assets/images/sample02.jpg`}
        alt=''
      />
      <p>{data.choices[0].text}</p>
    </div>
  );
}
