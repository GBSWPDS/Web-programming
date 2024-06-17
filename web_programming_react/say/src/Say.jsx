import React from "react";

const Say = ({ message }) => {
  //   const sayMessage = (message) => {
  //     setMessage(message);
  //   };
  //   return (
  //     <div>
  //       <button onClick={() => sayMessage(setMessage, "안녕하세요")}>입장</button>
  //       <button onClick={() => sayMessage(setMessage, "안녕히계세요")}>퇴장</button>
  //     </div>
  //   );

  return <h1>{message}</h1>;
};
export default Say;
