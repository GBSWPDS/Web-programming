import "./App.css";
import { useState } from "react";
// import Say from "./Say.jsx";
import Viewer from "./SayViewer.jsx";
import Controller from "./SayController.jsx";
import SayColor from "./SayColor.jsx";

// Say 사용자정의컴포넌트 만들어서 분리하기
// onClick의 이벤트핸들러 : 밖으로 빼서 함수 두개로 만들기
function App() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  // const sayHi = () => {
  //   setMessage("안녕하세요");
  // };

  // const sayBi = () => {
  //   setMessage("안녕히가세요");
  // };

  return (
    <div>
      {/* <Say setMessage={setMessage} />
      <h1>{message}</h1> */}

      {/* <button onClick={sayHi}>입장</button>
      <button onClick={sayBi}>퇴장</button>
      <Say message={message} /> */}
      <Controller setMessage={setMessage} />
      <Viewer message={message} color={color} />
      <SayColor setColor={setColor} />
    </div>
  );
}
export default App;
