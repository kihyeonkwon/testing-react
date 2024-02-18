// src/UserContext.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserProvider } from "./UserContext";
import UserNameDisplay from "./UserNameDisplay";

test("renders with the default user name", () => {
  render(
    <UserProvider>
      <UserNameDisplay />
    </UserProvider>
  );
  expect(screen.getByText("Guest")).toBeInTheDocument();
});
