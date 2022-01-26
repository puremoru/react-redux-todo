import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/index";

const App: React.FC = () => {
  const lists = useSelector((state: RootState) => state.todo.lists);
  const dispatch = useDispatch();
  const doneList = (name: string) => {
    dispatch({ type: "DONE_TODO", name: name });
  };
  const deleteList = (name: string) => {
    dispatch({ type: "DELETE_TODO", name: name });
  };
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => !list.complete)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>完了</button>
              <button onClick={() => deleteList(list.name)}>削除</button>
            </div>
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
