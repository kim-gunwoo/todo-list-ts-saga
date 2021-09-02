import { all, call } from "redux-saga/effects";
import todo from "./todo";

function* rootSaga() {
  yield all([call(todo)]);
}

export default rootSaga;
