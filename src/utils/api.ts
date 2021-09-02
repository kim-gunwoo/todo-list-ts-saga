import { CheckTodo, Todos, UpdateTodo } from "types/todo";

const BASE_URL = "http://dummy-server.io/";

export const fetchPostTodo = async (content: string): Promise<object> => {
  try {
    // const res = await fetch(`${BASE_URL}/todo`, {
    //   method: "POST",
    //   body: JSON.stringify(content),
    // });
    // return res.json();
    return { msg: "string" };
  } catch (e) {
    throw e;
  }
};

export const fetchGetTodo = async (): Promise<Todos> => {
  try {
    // const res = await fetch(`${BASE_URL}/todo`);
    // return res.json();
    return {
      count: 2,
      todoList: [
        {
          id: "1",
          content: "초기값-1",
          isCheck: true,
          createdAt: "2021-05-26T11:51:05.097Z",
        },
        {
          id: "2",
          content: "초기값-2",
          isCheck: false,
          createdAt: "2021-05-26T16:15:25.729Z",
        },
      ],
    };
  } catch (e) {
    throw e;
  }
};

export const fetchUpdateTodo = async (todo: UpdateTodo): Promise<object> => {
  try {
    // const res = await fetch(`${BASE_URL}/todo:/${todo.id}`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     content: todo.content,
    //   }),
    // });
    // return res.json();
    return { msg: "string", content: "string" };
  } catch (e) {
    throw e;
  }
};

export const fetchCheckTodo = async (todo: CheckTodo): Promise<object> => {
  try {
    // const res = await fetch(`${BASE_URL}/todo:/${todo.id}`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     isCheck: todo.isCheck,
    //   }),
    // });
    // return res.json();
    return { msg: "string" };
  } catch (e) {
    throw e;
  }
};

export const fetchDeleteTodo = async (id: string): Promise<object> => {
  try {
    // const res = await fetch(`${BASE_URL}/todo:/${id}`, { method: "POST" });
    // return res.json();
    return { msg: "string" };
  } catch (e) {
    throw e;
  }
};
