import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "store/actions/todo";
import styled from "styled-components";

const CreateTodo: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(addTodoRequest(value));
    setValue("");
  };

  const hanleInput = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input autoFocus type="text" onChange={hanleInput} value={value} />
        <button type="submit">ADD</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  max-width: 768px;
  width: 100%;
  background-color: white;

  form {
    display: flex;
    gap: 10px;
    padding: 10px;

    input {
      flex: 1;
      padding-left: 10px;
      font-size: 16px;
    }

    button {
      padding: 10px;
      cursor: pointer;
      border: 1px solid gray;
    }
  }
`;

export default CreateTodo;
