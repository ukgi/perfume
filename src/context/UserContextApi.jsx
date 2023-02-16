import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

export function UserContextApiProvider({ children }) {
  const [user, setUser] = useState(
    () =>
      JSON.parse(window.sessionStorage.getItem("userAnswer")) || {
        genderAnswer: "",
        moodAnswer: "",
        scentAnswer: "",
        seasonAnswer: "",
        styleAnswer: "",
      }
  );

  const [userName, setUserName] = useState(
    () => JSON.parse(window.sessionStorage.getItem("userName")) || ""
  );

  useEffect(() => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
    window.sessionStorage.setItem("userName", JSON.stringify(userName));
  }, [user, userName]);

  return (
    <UserContext.Provider value={{ user, setUser, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const value = useContext(UserContext);
  if (value === undefined) {
    throw new Error(
      "useUserContext should be used within UserContext.Provider"
    );
  } else return value;
}
