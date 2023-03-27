// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Recommenders.module.css";
import { config as server } from "../../config";

export default function Recommenders() {
  const id = sessionStorage.getItem("id");
  const [recommenders, setRecommenders] = useState();

  // const { data: recommenders } = useQuery(["recommenders"], async () => {
  //   const accessToken = sessionStorage.getItem("accessToken");
  //   const config = {
  //     headers: { Authorization: `${accessToken}` },
  //   };
  //   const data = await axios.get(
  //     `${process.env.REACT_APP_SERVER_DOMAIN}/member/show-recommended-perfume/${id}`,
  //     config
  //   );
  //   return data.data.recommendationList;
  // });

  useEffect(() => {
    const handleRecommenders = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const config = {
        headers: { Authorization: `${accessToken}` },
      };
      const data = await axios.get(
        `${server.api}/member/show-recommended-perfume/${id}`,
        config
      );
      setRecommenders(data.data.recommendationList);
      return data.data.recommendationList;
    };
    handleRecommenders();
  }, [id]);

  return (
    <div>
      {recommenders && (
        <span className={styles.recommenders}>{recommenders.length}</span>
      )}
    </div>
  );
}
