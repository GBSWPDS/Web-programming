import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  // 상태만들기
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <section>
        {/* ↓ props : 부모컴포넌트에서 자식 컴포넌트에게 보내주는 데이터 */}
        <Viewer count={count} />
      </section>
      <section>
        {/* ↓ props : 부모컴포넌트에서 자식 컴포넌트에게 보내주는 함수 */}
        <Controller count={count} setCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
