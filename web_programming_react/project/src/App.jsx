import { useEffect, useRef, useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import "./App.css";

function App() {
  // 상태만들기
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // const didMountRef = useRef(false);

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  // 컴포넌트 생애주기 중 업데이트가 발생하는 3가지 조건 중 상태 변수가 변경 될 때
  // 상태변수 count, text 값이 변경 될 때 컴포넌트 업데이트 발생
  // 이때 useEffect를 이용해서 콜백함수 실행 -> 현재는 콜백함수가 콘솔에 출력하기
  useEffect(() => {
    console.log("카운트: " + count + " " + " 텍스트: " + text + " ");
  }, [count, text]);

  // 컴포넌트 마운트 시점에만 실행 : 의존성 배열에 값이 없을 때
  // useEffect(() => {
  //   console.log("업데이트");
  // }, [])

  // useEffect(() => {
  //   // 컴포넌트 마운트 시점에 실행
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   }
  //   // 컴포넌트 마운트된 뒤 컴포넌트가 업데이트 될 때 실행
  //   else {
  //     console.log("업데이트!!");
  //   }
  // });

  return (
    <div className="App">
      <section>
        <input type="text" value={text} onInput={handleSetText} />
      </section>
      <section>
        {/* ↓ props : 부모컴포넌트에서 자식 컴포넌트에게 보내주는 데이터 */}
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        {/* ↓ props : 부모컴포넌트에서 자식 컴포넌트에게 보내주는 함수 */}
        <Controller setCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
