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

  useEffect(() => {
    window.sessionStorage.setItem("userAnswer", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
