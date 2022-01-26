import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/index";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);

  const lists = useSelector((state: RootState) => state.todo.lists);
  const dispatch = useDispatch();
  const doneList = (name: string) => {
    dispatch({ type: "DONE_TODO", name: name });
  };
  const deleteList = (name: string) => {
    dispatch({ type: "DELETE_TODO", name: name });
  };
  const addList = () => {
    if (!name) return;

    setComplete(false);
    dispatch({
      type: "ADD_TODO",
      payload: {
        name,
        complete,
      },
    });
    setName("");
  };
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addList}>追加</button>
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
