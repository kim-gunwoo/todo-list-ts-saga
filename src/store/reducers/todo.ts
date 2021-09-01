import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  UPDATE_TODO,
} from "store/actions/types";
import { TodosAction } from "store/actions/todo";
import { Todos } from "types/todo";

const INITIAL_STATE: Todos = {
  count: 0,
  todoList: [],
};

export default function todo(state = INITIAL_STATE, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
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
    case DELETE_TODO:
      return {
        ...state,
        count: state.count - 1,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case CHECK_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCheck: action.payload.isCheck }
            : todo
        ),
      };
    case UPDATE_TODO:
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
