import React, { useState } from "react";
import { ToDoList } from "../type/type";
import uuid from "react-uuid";
// import { styled } from "styled-components";
import Button from "./elem/Button";
import Input from "./elem/Input";
import { useDispatch } from "react-redux";
import { addTodo } from "../config/module/todo";

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();

  const handleReset = (): void => {
    setTitle("");
    setBody("");
  };

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title) return;
    if (!body) return;

    const newTodo: ToDoList = { title, body, isDone: false, id: uuid() };
    dispatch(addTodo(newTodo));
    handleReset();
  };

  return (
    <form
      className="flex items-center w-full py-3 border-b-1 border-black gap-5"
      onSubmit={handleSubmitTodo}
    >
      <label className="labelStyle" htmlFor="title">
        제목
      </label>
      <Input
        value={title}
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        type="text"
      />
      <label className="labelStyle" htmlFor="body">
        내용
      </label>
      <Input
        value={body}
        id="body"
        onChange={(event) => setBody(event.target.value)}
        type="text"
      />
      <Button size={"large"} styleType={"submit"}>
        추가하기
      </Button>
    </form>
  );
};

// const StForm = styled.form`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding-bottom: 21px;
//   border-bottom: 1px solid;
//   gap: 20px;
// `;

// const StLabel = styled.label`
//   font-weight: bold;
//   font-size: 20px;
// `;

export default Form;
