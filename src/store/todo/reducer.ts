import { todo } from "./types";

const initialState: todo = {
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

export const todoReducer = (state = initialState, action: any): todo => {
  return state;
};
