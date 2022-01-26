import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";

type list = {
  name: string;
  complete: boolean;
};

const App: React.FC = () => {
  const lists = useSelector((state: RootState) => state.todo.lists);
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>Todoリスト</h2>
      <ul>
        {lists.map((list: list, index: number) => (
          <li key={index}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
