import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button2";

test("버튼 클릭 시 상태 변화로 'clicked!' 문구가 표시되는지 확인", async () => {
  render(<Button />);

  // '클릭하세요' 버튼을 찾음
  const buttonElement = screen.getByText("클릭하세요");

  // 버튼 클릭 이벤트 발생
  fireEvent.click(buttonElement);

  // 'clicked!' 문구가 화면에 표시되는지 확인
  // Correctly use findByText for async element search
  const clickedMessage = await screen.findByText("clicked!");
  expect(clickedMessage).toBeInTheDocument();
});
