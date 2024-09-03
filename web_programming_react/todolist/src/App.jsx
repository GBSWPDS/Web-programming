import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

const mockTodo = [
  {
    id: 0,
    content: "아무거나",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 0,
    content: "아무거나 1",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 0,
    content: "아무거나 2",
    createDate: new Date().getTime(),
    isDone: false,
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
