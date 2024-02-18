// src/UserNameDisplay.js
import React from "react";
import { useUser } from "./UserContext";

const UserNameDisplay = () => {
  const { name } = useUser();
  return <div>{name}</div>;
};

export default UserNameDisplay;
