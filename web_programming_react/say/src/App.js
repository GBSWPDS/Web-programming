import "./App.css";
import { useState } from "react";
import Say from "./Say.tsx";

// Say 사용자정의컴포넌트 만들어서 분리하기
// onClick의 이벤트핸들러 : 밖으로 빼서 함수 두개로 만들기
function App() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <Say setMessage={setMessage} />
      <h1>{message}</h1>
    </div>
  );
}
export default App;
