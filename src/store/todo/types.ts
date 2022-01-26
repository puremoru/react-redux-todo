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

export type TodoActionTypes = DoneTodoAction;
