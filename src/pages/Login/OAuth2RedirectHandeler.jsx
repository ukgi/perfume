import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styles from "./Login.module.css";

const JWT_EXPIRY_TIME = 60000;

export default function OAuth2RedirectHandeler() {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

  const getKakaoToken = async () => {
    axios
      .get(`http://3.37.138.50:8080/oauth/login?code=${KAKAO_CODE}`)
      .then((res) => {
        onLoginSuccess(res);
      })
      .catch(console.error);
  };

  const onSilentRefresh = async () => {
    axios.defaults.headers.common["X-REFRESH-TOKEN"] =
      localStorage.getItem("refreshToken");
    axios({
      url: "http://3.37.138.50:8080/member/regenerate",
      method: "post",
    })
      .then(onLoginSuccess)
      .catch((err) => console.error(err));
  };

  const onLoginSuccess = (res) => {
    console.log(res);
    const accessToken = res.data.accessToken;
    const refreshToken = res.data.refreshToken;
    const id = res.data.id;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("id", id);
    axios.defaults.headers.common["X-AUTH-TOKEN"] = accessToken;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 10000);
  };

  const handleHeader = () => {
    axios
      .post(`http://3.37.138.50:8080/member/response`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!KAKAO_CODE) return;
    getKakaoToken();
  }, []);

  return (
    <div className={styles.body}>
      <button onClick={handleHeader}>버튼</button>
    </div>
  );
}
