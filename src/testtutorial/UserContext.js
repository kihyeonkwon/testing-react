// src/UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Guest");

  const value = {
    name,
    setName,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
