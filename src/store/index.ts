import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todo/reducer";

const RootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(RootReducer);

export default store;

export type RootState = ReturnType<typeof RootReducer>;
