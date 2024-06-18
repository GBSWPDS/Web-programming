import React from "react";

const Controller = ({ sayHandler }) => {
  return (
    <div>
      <button onClick={() => sayHandler("안녕하세요.")}>입장</button>
      <button onClick={() => sayHandler("안녕히 가세요.")}>퇴장</button>
    </div>
  );
};
export default Controller;
