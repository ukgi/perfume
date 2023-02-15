import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserContextApiProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    genderAnswer: "",
    moodAnswer: "",
    scentAnswer: "",
    seasonAnswer: "",
    styleAnswer: "",
  });
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
