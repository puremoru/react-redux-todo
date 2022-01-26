import { Todo } from "./types";
import { TodoActionTypes } from "./types";

const initialState: Todo = {
  lists: [
    {
      name: "ブログを確認",
      complete: false,
    },
    {
      name: "メールの返信",
      complete: false,
    },
  ],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): Todo => {
  switch (action.type) {
    case "DONE_TODO":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.name) return list;
          return {
            ...list,
            complete: true,
          };
        }),
      };
    default:
      return state;
  }
};
