import { Action } from "redux";
import { ActionTypes } from "../../utils/actionTypes";

export type Todo = {
  lists: {
    name: string;
    complete: boolean;
  }[];
};

interface DoneTodoAction extends Action {
  type: typeof ActionTypes.doneTodo;
  name: string;
}

interface DeleteTodoAction extends Action {
  type: typeof ActionTypes.deleteTodo;
  name: string;
}

interface AddTodoAction extends Action {
  type: typeof ActionTypes.addTodo;
  payload: {
    name: string;
    complete: boolean;
  };
}

export type TodoActionTypes = DoneTodoAction | DeleteTodoAction | AddTodoAction;
