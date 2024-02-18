import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "./HelloWorld";

test("renders hello world message", () => {
  render(<HelloWorld />);
  const helloWorldElement = screen.getByText("Hello, World!");
  expect(helloWorldElement).toBeInTheDocument();
});
