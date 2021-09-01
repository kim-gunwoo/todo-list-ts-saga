import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "components/TodoItem";
import { RootState } from "store/reducers";
import { Todos } from "types/todo";

const TodoList: React.FC = () => {
  const { todoList } = useSelector<RootState, Todos>((state) => state.todo);
  // const todoList = [
  //   { id: "1", content: "test", isCheck: false, createdAt: "" },
  // ];

  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 70px;
  height: 100%;
  overflow-y: auto;
`;

export default TodoList;
