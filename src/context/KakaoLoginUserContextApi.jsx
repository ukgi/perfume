import React, { createContext, useContext, useState } from "react";

export const KakaoLoginUserContext = createContext();

export function KakaoLoginUserContextApiProvider({ children }) {
  const [KakaoUser, setKakaoUser] = useState("");

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
