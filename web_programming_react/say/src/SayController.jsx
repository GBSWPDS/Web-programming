import React from "react";

const Controller = ({ setMessage }) => {
  const sayHi = () => {
    setMessage("안녕하세요");
  };

  const sayBi = () => {
    setMessage("안녕히가세요");
  };

  return (
    <div>
      <button onClick={sayHi}>입장</button>
      <button onClick={sayBi}>퇴장</button>
    </div>
  );
};
export default Controller;
