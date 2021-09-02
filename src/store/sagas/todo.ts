import { delay, put, takeLatest, all, call } from "redux-saga/effects";
import { CheckTodo, Todos, UpdateTodo } from "types/todo";
import {
  GET_TODOS_REQUEST,
  ADD_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  CHECK_TODO_REQUEST,
  DELETE_TODO_REQUEST,
} from "store/actions/types";
import {
  getTodosSuccess,
  addTodoSuccess,
  addTodoFail,
  updateTodoSuccess,
  updateTodoFail,
  deleteTodoSuccess,
  deleteTodoFail,
  checkTodoSuccess,
  checkTodoFail,
  getTodosFail,
} from "store/actions/todo";
import {
  fetchGetTodo,
  fetchPostTodo,
  fetchCheckTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
} from "utils/api";

type TodoSaga = {
  type: string;
  payload: string;
};

type UpdateTodoSaga = {
  type: string;
  payload: UpdateTodo;
};

type CheckTodoSage = {
  type: string;
  payload: CheckTodo;
};

function* getTodo(): Generator {
  try {
    const todos: any | Todos = yield call(fetchGetTodo);
    yield delay(1000);
    yield put(getTodosSuccess(todos));
  } catch (error) {
    yield put(getTodosFail());
  }
}

function* addTodo(action: TodoSaga): Generator {
  try {
    const data = yield call(fetchPostTodo, action.payload);
    yield put(addTodoSuccess(action.payload));
  } catch (error) {
    yield put(addTodoFail());
  }
}

function* deleteTodo(action: TodoSaga): Generator {
  try {
    const data = yield call(fetchDeleteTodo, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(deleteTodoFail());
  }
}

function* updateTodo(action: UpdateTodoSaga): Generator {
  try {
    const data = yield call(fetchUpdateTodo, action.payload);
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* checkTodo(action: CheckTodoSage): Generator {
  try {
    const data = yield call(fetchCheckTodo, action.payload);
    yield put(checkTodoSuccess(action.payload));
  } catch (error) {
    yield put(checkTodoFail());
  }
}

export default function* todo() {
  yield all([
    takeLatest(GET_TODOS_REQUEST, getTodo),
    takeLatest(ADD_TODO_REQUEST, addTodo),
    takeLatest(DELETE_TODO_REQUEST, deleteTodo),
    takeLatest(UPDATE_TODO_REQUEST, updateTodo),
    takeLatest(CHECK_TODO_REQUEST, checkTodo),
  ]);
}
