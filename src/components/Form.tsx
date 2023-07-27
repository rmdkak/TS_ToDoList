import React, { useState } from "react";
import { ToDoList } from "./Home";
import uuid from "react-uuid";
import { styled } from "styled-components";
import Button from "./elem/Button";
import Input from "./elem/Input";

type props = {
  todo: ToDoList[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const Form = ({ todo, setTodo }: props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleReset = (): void => {
    setTitle("");
    setBody("");
  };

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title) return;
    if (!body) return;

    const newTodo: ToDoList = { title, body, isDone: false, id: uuid() };
    setTodo([...todo, newTodo]);
    handleReset();
  };

  return (
    <StForm onSubmit={handleSubmitTodo}>
      <StLabel htmlFor="title">제목</StLabel>
      <Input
        value={title}
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        type="text"
      />
      <StLabel htmlFor="body">내용</StLabel>
      <Input
        value={body}
        id="body"
        onChange={(event) => setBody(event.target.value)}
        type="text"
      />
      <Button size={"large"} styleType={"submit"}>
        추가하기
      </Button>
    </StForm>
  );
};

const StForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 21px;
  border-bottom: 1px solid;
  gap: 20px;
`;

const StLabel = styled.label`
  font-weight: bold;
  font-size: 20px;
`;

export default Form;
