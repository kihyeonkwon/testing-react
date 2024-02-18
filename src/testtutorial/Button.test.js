import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("버튼 클릭 시 logMessage 함수 호출", () => {
  // logMessage 함수의 호출을 가로채기 위한 모의 함수(mock function) 생성
  const onClick = jest.fn();

  // Button 컴포넌트를 렌더링하고, logMessage 함수를 가로채도록 설정
  render(<Button onClick={onClick} />);

  // '클릭하세요' 버튼을 찾음
  const buttonElement = screen.getByText("클릭하세요");

  // 버튼 클릭 이벤트 발생
  fireEvent.click(buttonElement);

  // logMessage 함수가 호출되었는지 확인
  expect(onClick).toHaveBeenCalled();
});
