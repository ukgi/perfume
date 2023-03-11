import React, { createContext, useContext, useEffect, useState } from "react";

export const KakaoLoginUserContext = createContext();

export function KakaoLoginUserContextApiProvider({ children }) {
  const [KakaoUser, setKakaoUser] = useState(
    () =>
      JSON.parse(window.sessionStorage.getItem("userAnswer")) || {
        genderAnswer: "",
        moodAnswer: "",
        scentAnswer: "",
        seasonAnswer: "",
        styleAnswer: "",
      }
  );

  useEffect(() => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(KakaoUser));
  }, [KakaoUser]);

  return (
    <KakaoLoginUserContext.Provider value={{ KakaoUser, setKakaoUser }}>
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
