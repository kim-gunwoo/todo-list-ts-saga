import { UpdateTodo, CheckTodo } from "types/todo";
import { ADD_TODO, DELETE_TODO, CHECK_TODO, UPDATE_TODO } from "./types";

export const addTodo = (content: string) => {
  return { type: ADD_TODO, payload: content };
};

export const updateTodo = (todo: UpdateTodo) => {
  return { type: UPDATE_TODO, payload: todo };
};

export const checkTodo = (todo: CheckTodo) => {
  return { type: CHECK_TODO, payload: todo };
};

export const deleteTodo = (id: string) => {
  return { type: DELETE_TODO, payload: id };
};

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof deleteTodo>;
