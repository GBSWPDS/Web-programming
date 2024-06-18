import React from "react";

// const Viewer = ({ message, color }) => {
//   return <h1 style={{ color }}>{message}</h1>;
// };

const SayViewer = (props) => {
  return <h1 style={{ color: props.color }}>{props.message}</h1>;
};
export default SayViewer;
