import React from "react";
import { ToDoList } from "./Home";
import Card from "./Card";
import { styled } from "styled-components";

type props = {
  todo: ToDoList[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const List = ({ todo, setTodo }: props) => {
  const handleDelteTodo = (id: string): void => {
    setTodo(todo.filter((obj) => obj.id !== id));
  };

  const handleChangeTodoBoolean = (id: string): void => {
    setTodo(
      todo.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isDone: !obj.isDone };
        }
        return { ...obj };
      })
    );
  };

  return (
    <StContainer>
      <h2>할 일 목록</h2>
      <StUl>
        {todo
          .filter((obj) => obj.isDone === false)
          .map((item) => (
            <Card
              item={item}
              handleChangeTodoBoolean={handleChangeTodoBoolean}
              handleDelteTodo={handleDelteTodo}
            />
          ))}
      </StUl>
      <h2>해낸 일 목록</h2>
      <StUl>
        {todo
          .filter((obj) => obj.isDone === true)
          .map((item) => (
            <Card
              item={item}
              handleChangeTodoBoolean={handleChangeTodoBoolean}
              handleDelteTodo={handleDelteTodo}
            />
          ))}
      </StUl>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const StUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  gap: 50px;
`;

export default List;
