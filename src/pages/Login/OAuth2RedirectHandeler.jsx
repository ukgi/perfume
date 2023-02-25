import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styles from "./Login.module.css";

export default function OAuth2RedirectHandeler() {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

  const onLoginSuccess = (res) => {
    console.log(res);
    const accessToken = res.data.accessToken;
    const refreshToken = res.data.refreshToken;
    const id = res.data.id;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("id", id);
    axios.defaults.headers.common["X-AUTH-TOKEN"] = accessToken;
  };

  // const onSilentRefresh = async () => {
  //   axios.defaults.headers.common["X-REFRESH-TOKEN"] =
  //     localStorage.getItem("refreshToken");
  //   axios({
  //     url: `${process.env.REACT_APP_SERVER_DOMAIN}/member/regenerate`,
  //     method: "post",
  //   })
  //     .then(onLoginSuccess)
  //     .catch((err) => console.error(err));
  // };

  const handleHeader = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/member/response`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.status));
  };

  useEffect(() => {
    if (!KAKAO_CODE) return;
    const getKakaoToken = async () => {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/oauth/login?code=${KAKAO_CODE}`
        )
        .then((res) => {
          onLoginSuccess(res);
        })
        .catch(console.error);
    };
    getKakaoToken();
  }, [KAKAO_CODE]);

  return (
    <div className={styles.body}>
      <button onClick={handleHeader}>버튼</button>
    </div>
  );
}
