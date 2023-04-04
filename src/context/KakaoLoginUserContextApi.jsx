import React, { createContext, useContext, useEffect, useState } from "react";

export const KakaoLoginUserContext = createContext();

export function KakaoLoginUserContextApiProvider({ children }) {
  const [recommend, setRecommend] = useState(
    () =>
      JSON.parse(window.sessionStorage.getItem("recommendData")) || {
        genderAnswer: "",
        moodAnswer: "",
        scentAnswer: "",
        seasonAnswer: "",
        styleAnswer: "",
        id: "",
        recommender: "",
        comment: "",
      }
  );

  const [isRecommend, setIsRecommend] = useState(
    () => JSON.parse(window.sessionStorage.getItem("isRecommend")) || false
  );

  useEffect(() => {
    window.sessionStorage.setItem("recommendData", JSON.stringify(recommend));
    window.sessionStorage.setItem("isRecommend", isRecommend);
  }, [recommend, isRecommend]);

  return (
    <KakaoLoginUserContext.Provider
      value={{ recommend, setRecommend, isRecommend, setIsRecommend }}
    >
      {children}
    </KakaoLoginUserContext.Provider>
  );
}

export function useKakaoLoginUserContext() {
  const value = useContext(KakaoLoginUserContext);
  if (value === undefined) {
    throw new Error(
      "useUserContext should be used within UserContext.Provider"
    );
  } else return value;
}
