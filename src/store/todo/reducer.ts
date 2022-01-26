import { Todo } from "./types";
import { TodoActionTypes } from "./types";
import { ActionTypes } from "../../utils/actionTypes";

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
    case ActionTypes.doneTodo:
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.name) return list;
          return {
            ...list,
            complete: true,
          };
        }),
      };
    case ActionTypes.deleteTodo:
      return {
        lists: state.lists.filter((list) => list.name !== action.name),
      };
    default:
      return state;
  }
};
