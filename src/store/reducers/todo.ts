import {
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  CHECK_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
} from "store/actions/types";
import { TodosAction } from "store/actions/todo";
import { Todos } from "types/todo";

const INITIAL_STATE: Todos = {
  count: 0,
  todoList: [],
};

export default function todo(state = INITIAL_STATE, action: TodosAction) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { ...state, ...action.payload };
    case ADD_TODO_SUCCESS:
      const newId =
        Math.max(0, ...state.todoList.map((todo) => Number(todo.id))) + 1;
      return {
        ...state,
        count: state.count + 1,
        todoList: [
          ...state.todoList,
          {
            id: `${newId}`,
            content: action.payload,
            isCheck: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case CHECK_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCheck: action.payload.isCheck }
            : todo
        ),
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo
        ),
      };
    default:
      return state;
  }
}
