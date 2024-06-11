const Controller = ({ count, setCount }) => {
  // const handleOnclick = (value) => {
  //   handleSetCount(count + value);
  // };

  return (
    <div>
      <button onClick={() => setCount(1)}>-1</button>
      <button onClick={() => setCount(-10)}>-10</button>
      <button onClick={() => setCount(-100)}>-100</button>
      <button onClick={() => setCount(+1)}>+1</button>
      <button onClick={() => setCount(+10)}>+10</button>
      <button onClick={() => setCount(+100)}>+100</button>
    </div>
  );
};
export default Controller;
