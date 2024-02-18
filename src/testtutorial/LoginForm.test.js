// LoginForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("allows the user to submit a form with username and password", () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    userEvent.type(screen.getByLabelText(/username/i), "user1");
    userEvent.type(screen.getByLabelText(/password/i), "password");

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      username: "user1",
      password: "password",
    });
  });
});
