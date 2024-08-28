import { useState, useRef, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  // 상태만들기
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const didMountRef = useRef(true);

  // Controller 에 넘겨줄 상태값 변경 함수 만들기
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  // 상태변수 count, text 값이 변경될 때 컴포넌트 업데이트 발생
  // 이때 useEffect를 이용해서 콜백함수 실행 : 상태변수가 변경될 때 콘솔에 출력
  // useEffect(() => {
  //     console.log('Update');
  // }, [count, text]);

  // 컴포넌트가 마운트 + 업데이트일때 항상 실행
  // useEffect(() => {
  //     console.log('업데이트');
  // });

  // 컴포넌트가 마운트될 때 didMountRef가 false -> 이 때는 콘솔에 출력하지 않음
  // 컴포넌트가 업데이트될 때 didMountRef가 true -> 이 때 콘솔에 출력
  useEffect(() => {
    if (didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("업데이트!!!");
    }
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* props : 부모컴포넌트에서 자식컴포넌트에게 보내주는 함수*/}
        <input type="text" value={text} onInput={handleSetText} />
        {/* props : 부모컴포넌트에서 자식컴포넌트에게 보내주는 데이터*/}
        <Viewer count={count} />
      </section>
      <section>
        {/* props : 부모컴포넌트에서 자식컴포넌트에게 보내주는 함수*/}
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
