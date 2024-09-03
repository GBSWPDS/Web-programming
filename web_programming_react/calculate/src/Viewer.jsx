const Viewer = () => {
  let num1 = "";
  let num = "";
  let operator = "";

  return (
    <>
      <input readonly id="operator" />
      <input readonly type="number" id="result" />
      <div className="row">
        <button id="number-7">7</button>
        <button id="number-8">8</button>
        <button id="number-9">9</button>
        <button id="plus">+</button>
      </div>
      <div className="row">
        <button id="number-4">4</button>
        <button id="number-5">5</button>
        <button id="number-6">6</button>
        <button id="minus">-</button>
      </div>
      <div className="row">
        <button id="number-1">1</button>
        <button id="number-2">2</button>
        <button id="number-3">3</button>
        <button id="div">/</button>
      </div>
      <div className="row">
        <button id="clear">c</button>
        <button id="number-0">0</button>
        <button id="calc">=</button>
        <button id="mul">*</button>
      </div>
    </>
  );
};
export default Viewer;
