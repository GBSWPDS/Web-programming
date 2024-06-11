import React, { Component } from "react";

const EventPrac = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>이벤트</h1>
      <input
        type="text"
        name="message"
        placeholder="입력하세요."
        onChange={handleOnChange}
      />
    </div>
  );
};
export default EventPrac;
