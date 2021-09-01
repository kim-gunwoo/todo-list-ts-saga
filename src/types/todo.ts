export interface Todo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

export interface Todos {
  count: number;
  todoList: Todo[];
}

export type UpdateTodo = {
  id: string;
  content: string;
};

export type CheckTodo = {
  id: string;
  isCheck: boolean;
};
