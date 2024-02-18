import React, { useState } from "react";

export default function Button() {
  const [clicked, setClicked] = useState(false);

  const logMessage = () => {
    console.log("버튼이 클릭되었습니다!");
    setClicked(true); // 클릭 상태 변경
  };

  return (
    <div>
      <button onClick={logMessage}>클릭하세요</button>
      {clicked && <p>clicked!</p>}
    </div>
  );
}
