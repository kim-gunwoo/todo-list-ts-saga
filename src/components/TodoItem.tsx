import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Todo } from "types/todo";
import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ReactComponent as Check } from "assets/icons/check.svg";
import { ReactComponent as Save } from "assets/icons/save.svg";
import { ReactComponent as Cancel } from "assets/icons/cancel.svg";
import {
  checkTodoRequest,
  deleteTodoRequest,
  updateTodoRequest,
} from "store/actions/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isModify, setIsModify] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleCheck = (): void => {
    dispatch(
      checkTodoRequest({
        id: todo.id,
        isCheck: !todo.isCheck,
      })
    );
  };

  const handleModify = (): void => {
    setValue(todo.content);
    setIsModify(true);
  };

  const handleDelete = (): void => {
    dispatch(deleteTodoRequest(todo.id));
  };

  const handleSubmit = (): void => {
    dispatch(
      updateTodoRequest({
        id: todo.id,
        content: value,
      })
    );
    setIsModify(false);
  };

  return (
    <Container>
      <CheckCircle onClick={handleCheck}>
        {todo.isCheck && <Check />}
      </CheckCircle>
      {isModify ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" value={value} onChange={handleInput} />
        </form>
      ) : (
        <Text>{todo.content}</Text>
      )}
      <Button>
        {isModify ? (
          <Save onClick={handleSubmit} />
        ) : (
          <Edit onClick={handleModify} />
        )}
      </Button>
      <Button>
        {isModify ? (
          <Cancel onClick={() => setIsModify(false)} />
        ) : (
          <Trash onClick={handleDelete} />
        )}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background: white;
  form {
    flex: 1;

    input {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  fill: gray;
  cursor: pointer;

  &:hover {
    fill: black;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid gray;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 16px;
`;
