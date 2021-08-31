import styled from "styled-components";
import CreateTodo from "components/CreateTodo";
import TodoList from "components/TodoList";

const TodoContainer: React.FC = () => {
  return (
    <Container>
      <CreateTodo />
      <TodoList />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 768px;
  background-color: #eeeeee;
  height: 100vh;
`;

export default TodoContainer;
