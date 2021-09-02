import { UpdateTodo, CheckTodo, Todos } from "types/todo";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  CHECK_TODO_REQUEST,
  CHECK_TODO_SUCCESS,
  CHECK_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  GET_TODOS_FAIL,
} from "./types";

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (todos: Todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

export const getTodosFail = () => {
  return {
    type: GET_TODOS_FAIL,
  };
};

export const addTodoRequest = (content: string) => {
  return {
    type: ADD_TODO_REQUEST,
    payload: content,
  };
};

export const addTodoSuccess = (content: string) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: content,
  };
};

export const addTodoFail = () => {
  return {
    type: ADD_TODO_FAIL,
  };
};

export const deleteTodoRequest = (id: string) => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: id,
  };
};

export const deleteTodoSuccess = (id: string) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id,
  };
};

export const deleteTodoFail = () => {
  return {
    type: DELETE_TODO_FAIL,
  };
};

export const updateTodoRequest = (todo: UpdateTodo) => {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: todo,
  };
};

export const updateTodoSuccess = (todo: UpdateTodo) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: todo,
  };
};

export const updateTodoFail = () => {
  return {
    type: UPDATE_TODO_FAIL,
  };
};

export const checkTodoRequest = (todo: CheckTodo) => {
  return {
    type: CHECK_TODO_REQUEST,
    payload: todo,
  };
};

export const checkTodoSuccess = (todo: CheckTodo) => {
  return {
    type: CHECK_TODO_SUCCESS,
    payload: todo,
  };
};

export const checkTodoFail = () => {
  return {
    type: CHECK_TODO_FAIL,
  };
};

export type TodosAction =
  | ReturnType<typeof getTodosRequest>
  | ReturnType<typeof getTodosSuccess>
  | ReturnType<typeof getTodosFail>
  | ReturnType<typeof addTodoRequest>
  | ReturnType<typeof addTodoSuccess>
  | ReturnType<typeof addTodoFail>
  | ReturnType<typeof updateTodoRequest>
  | ReturnType<typeof updateTodoSuccess>
  | ReturnType<typeof updateTodoFail>
  | ReturnType<typeof deleteTodoRequest>
  | ReturnType<typeof deleteTodoSuccess>
  | ReturnType<typeof deleteTodoFail>
  | ReturnType<typeof checkTodoRequest>
  | ReturnType<typeof checkTodoSuccess>
  | ReturnType<typeof checkTodoFail>;
