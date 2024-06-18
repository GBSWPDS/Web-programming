const SayColor = ({ setColor }) => {
  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div>
      <button onClick={() => changeColor("red")}>빨간색</button>
      <button onClick={() => changeColor("green")}>초록색</button>
      <button onClick={() => changeColor("blue")}>파란색</button>
    </div>
  );
};
export default SayColor;
