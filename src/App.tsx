import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";

const App: React.FC = () => {
  const lists = useSelector((state: RootState) => state.todo.lists);
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => !list.complete)
          .map((list, index) => (
            <div key={index}>{list.name}</div>
          ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete)
          .map((list, index) => (
            <div key={index}>{list.name}</div>
          ))}
      </ul>
    </div>
  );
};

export default App;
