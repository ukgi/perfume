import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

export default function OAuth2RedirectHandeler() {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (!KAKAO_CODE) return;
    const getKakaoToken = async () => {
      axios
        .get(`${config.api}/oauth/login?code=${KAKAO_CODE}`)
        .then((res) => {
          onLoginSuccess(res);
          navigate("/recommend");
        })
        .catch(console.error);
    };
    getKakaoToken();
  }, [KAKAO_CODE, navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      로딩중 ...
    </div>
  );
}

export const handleKakaoOauth = () => {
  axios
    .post(`${config.api}/member/response`)
    .then((res) => console.log("api요청이 성공적으로 진행됩니다👍", res))
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        console.log("401 error");
        onSilentRefresh();
      } else console.log(err);
    });
};

export const onSilentRefresh = async () => {
  axios.defaults.headers.common["X-REFRESH-TOKEN"] =
    sessionStorage.getItem("refreshToken");
  axios({
    url: `${config.api}/member/regenerate`,
    method: "post",
  })
    .then(onLoginSuccess)
    .catch((err) => console.error(err));
};

export const onLoginSuccess = (res) => {
  console.log("로그인 회원정보", res);
  const accessToken = res.data.accessToken;
  const refreshToken = res.data.refreshToken;
  const id = res.data.id;
  const memberId = res.data.memberId;
  const nickname = res.data.nickname;
  const thumbnailImage = res.data.thumbnailImage;
  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("refreshToken", refreshToken);
  sessionStorage.setItem("id", id);
  sessionStorage.setItem("memberId", memberId);
  sessionStorage.setItem("kakaoNickname", nickname);
  sessionStorage.setItem("thumbnailImage", thumbnailImage);
  axios.defaults.headers.common["Authorization"] = `${accessToken}`;
};
